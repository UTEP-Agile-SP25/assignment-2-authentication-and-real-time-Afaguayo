import { signUp,logOut, login, onAuthStateChanged } from "./auth";
import { db } from "./config";
import { doc, setDoc, collection,deleteDoc,onSnapshot, docId } from "firebase/firestore";

const saveSong = async function(){
    const songName = document.getElementById("songName").value;
    const artistName = document.getElementById("artistName").value;
    const songYear = document.getElementById("songYear").value;
    const songRating = document.getElementById("songRating").value;


    try {
        const songRef = doc(db, "songs", songName.toLowerCase()+  artistName.toLowerCase());
            await setDoc(songRef, {
                songName: songName,
                artistName: artistName,
                songRating: songRating,
                songYear: songYear,
                time: new Date()
            })
        console.log("Song saved successfully!");

        document.getElementById("songName") .value = "";
        document.getElementById("artistName").value = "";
        document.getElementById("songYear").value = "";
        document.getElementById("songRating").value = "";

    } catch (error) {
        console.error("Error saving song:", error);
    }
}

const addSong = document.querySelector("#addSongForm");
addSong.addEventListener("submit", (event) => {
    event.preventDefault();
    saveSong();
});

// fix below please V
const deletesong = document.querySelector("#deleteSongForm");
deletesong.addEventListener("submit", (event) => {
    event.preventDefault();
    const songName = document.getElementById("songID").value;
    deleteSong("songs", songName);
});


const deleteSong = async function(collection, docId){
    try {
        await deleteDoc(doc(db, collection, docId));
        console.log("Song deleted successfully!");
    } catch (error) {
        console.error("Error deleting song:", error);
    }
}

const songTableBody = document.getElementById("songTableBody");
onSnapshot(collection(db, "songs"), (snapshot) => {
    songTableBody.innerHTML = "";
    snapshot.forEach((doc) => {
        const song = doc.data();
        const row = `<tr>
                        <td>${song.songName}</td>
                        <td>${song.artistName}</td>
                        <td>${song.songYear}</td>
                        <td>${song.songRating}</td>
                        <td>${new Date(song.time.seconds * 1000).toLocaleString()}</td>
                    </tr>`;
        songTableBody.innerHTML += row;
    });
});