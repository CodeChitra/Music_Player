let audioElem = new Audio();
let seekBar = document.getElementById("seekBar");
let playBt = document.getElementById("play-pause");
let forward = document.getElementById("forward");
let backward = document.getElementById("backward");
let naam = document.getElementById("naam");
let author = document.getElementById("author");
let photo = document.getElementById("photo");
let i = 0;

// Function to load a new song
function loadSong(index) {
    audioElem.src = songs[index].sg;
    naam.innerText = songs[index].sgName;
    author.innerText = songs[index].sgAuthor;
    photo.src = songs[index].sgPhoto;
}

// Function to play or pause the song
function togglePlay() {
    if (audioElem.paused || audioElem.ended) {
        playBt.classList.remove("fa-circle-play");
        playBt.classList.add("fa-circle-pause");
        audioElem.play();
    } else {
        playBt.classList.remove("fa-circle-pause");
        playBt.classList.add("fa-circle-play");
        audioElem.pause();
    }
}

// Event listener for play/pause button
playBt.addEventListener("click", togglePlay);

// Event listener for updating the seekbar
audioElem.addEventListener("timeupdate", () => {
    let progress = (audioElem.currentTime / audioElem.duration) * 100;
    seekBar.value = progress;
});

// Event listener for seeking
seekBar.addEventListener("change", () => {
    audioElem.currentTime = (seekBar.value * audioElem.duration) / 100;
});

// Event listener for forward button
forward.addEventListener("click", () => {
    if (i < songs.length - 1) {
        i++;
        loadSong(i);
        togglePlay();
    } else {
        i = 0; // Wrap around to the beginning of the playlist
        loadSong(i);
        togglePlay();
    }
});

// Event listener for backward button
backward.addEventListener("click", () => {
    if (audioElem.currentTime > 3 || i === 0) {
        audioElem.currentTime = 0; // Restart the song if more than 3 seconds have passed
    } else {
        i--;
        loadSong(i);
        togglePlay();
    }
});
