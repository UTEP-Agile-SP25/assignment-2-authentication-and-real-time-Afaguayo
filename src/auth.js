import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./config";
import { setDoc, doc, getDocs, collection } from "firebase/firestore";


onAuthStateChanged(auth, async (user) => {
    if (user) {
        console.log("User is signed in:", user.email);
        await fetchUserData(user.uid);
        
    } else {
        console.log("User is signed out");

    }
})

async function fetchUserData(userID) {
    try {
        const userDoc = await getDocs(collection(db, "users"));
        const userData = userDoc.docs.find(doc => doc.id === userID)?.data();
        console.log("User data:", userData);
        document.getElementById("greeting").innerHTML = "<h1> Hello, "+ userData.firstName + "</h1>";
    } catch(error) {
        console.error("Error fetching user data:", error);
    }
}

export async function signUp(firstName, lastName, email, password) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log("User signed up:", userCredential.user.email);
        console.log("User ID:", userCredential.user.uid);

        const userRef = doc(db, "users", userCredential.user.uid);

        await setDoc(userRef, {
            firstName: firstName,
            lastName: lastName,
            timestamp: new Date()
        });

        return userCredential.user;
    } catch(error) {
        console.error("Error during signup:", error);
        throw error;
    }
}

export async function logIn(email, password) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        window.location.href = "songManager.html";
        console.log("User logged in:", userCredential.user.email);
        return userCredential.user;
    } catch(error) {
        console.error("Error during login:", error);
    }
}

export async function logOut() {
    try {
        await signOut(auth);
        window.location.href = "index.html";
        console.log("User logged out");
    } catch(error) {
        console.error("Error during logout:", error);
    }
}