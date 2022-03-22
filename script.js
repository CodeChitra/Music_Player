let songs = [
    { "sgName": "Thunder Beats", "sgAuthor": "Mia Khalifa", "sg": "songs/1.mp3", "sgPhoto": "covers/1.jpg" },
    { "sgName": "The Unstopabble", "sgAuthor": "Sunny Leone", "sg": "songs/2.mp3", "sgPhoto": "covers/2.jpg" },
    { "sgName": "Too Lusty", "sgAuthor": "Mia Malkoa", "sg": "songs/3.mp3", "sgPhoto": "covers/3.jpg" },
    { "sgName": "Best Friends", "sgAuthor": "Dani Daniels", "sg": "songs/4.mp3", "sgPhoto": "covers/4.jpg" },
    { "sgName": "Heart Broken", "sgAuthor": "Kendra Lust", "sg": "songs/5.mp3", "sgPhoto": "covers/5.jpg" },
    { "sgName": "Thunder Beats", "sgAuthor": "Crystal Lust", "sg": "songs/6.mp3", "sgPhoto": "covers/6.jpg" },
    { "sgName": "Thunder Beats", "sgAuthor": "Brandi Love", "sg": "songs/7.mp3", "sgPhoto": "covers/7.jpg" },
    { "sgName": "Thunder Beats", "sgAuthor": "Johny Sins", "sg": "songs/8.mp3", "sgPhoto": "covers/8.jpg" },
    { "sgName": "Thunder Beats", "sgAuthor": "King Jordy", "sg": "songs/9.mp3", "sgPhoto": "covers/9.jpg" },
    { "sgName": "Thunder Beats", "sgAuthor": "Mia Stankovich", "sg": "songs/10.mp3", "sgPhoto": "covers/10.jpg" }
]

// Song PLay Pause Functionality
let i = 0;
let playBt = document.getElementById("play-pause");
let audioElem = new Audio(songs[i].sg);
let seekBar = document.getElementById("seekBar");

playBt.addEventListener("click", () => {

    if (playBt.classList.contains("fa-circle-play")) {
        playBt.classList.remove("fa-circle-play");
        playBt.classList.add("fa-circle-pause");
        audioElem.play();
        seekBar.value = (audioElem.currentTime / audioElem.duration) * 100;
    }
    else {
        playBt.classList.remove("fa-circle-pause");
        playBt.classList.add("fa-circle-play");
        audioElem.pause();
    }
})

// Seek Bar Functionality And Synchroization with song

audioElem.addEventListener("timeupdate", () => {
    let progress = parseInt((audioElem.currentTime / audioElem.duration) * 100);
    seekBar.value = progress;
})

seekBar.addEventListener("change", () => {
    audioElem.currentTime = ((seekBar.value * audioElem.duration) / 100);
})

// Music Change Functionality

let forward = document.getElementById("forward");
let backward = document.getElementById("backward");
let naam = document.getElementById("naam");
let author = document.getElementById("author");
let photo = document.getElementById("photo");

forward.addEventListener("click", () => {
    if (i < 10) {

        i++;
    }
    audioElem.pause();
    seekBar.value = (audioElem.currentTime / audioElem.duration) * 100;
    audioElem.currentTime = 0;
    audioElem = new Audio(songs[i].sg);
    audioElem.play();
    naam.innerText = songs[i].sgName;
    author.innerText = songs[i].sgAuthor;
    photo.src = songs[i].sgPhoto;
    playBt.classList.remove("fa-circle-play");
    playBt.classList.add("fa-circle-pause");
})

backward.addEventListener("click", () => {
    if (i > 0) {

        i--;
    }
    audioElem.pause();
    seekBar.value = (audioElem.currentTime / audioElem.duration) * 100;
    audioElem.currentTime = 0;
    audioElem = new Audio(songs[i].sg);
    audioElem.play();
    naam.innerText = songs[i].sgName;
    author.innerText = songs[i].sgAuthor;
    photo.src = songs[i].sgPhoto;
    playBt.classList.remove("fa-circle-play");
    playBt.classList.add("fa-circle-pause");
})

