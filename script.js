let songs = [
    { "sgName": "Thunder Beats", "sgAuthor": "Johny Stark", "sg": "songs/1.mp3", "sgPhoto": "covers/1.jpg" },
    { "sgName": "The Unstopabble", "sgAuthor": "DJ Walter", "sg": "songs/2.mp3", "sgPhoto": "covers/2.jpg" },
    { "sgName": "Too Lusty", "sgAuthor": "Stanis", "sg": "songs/3.mp3", "sgPhoto": "covers/3.jpg" },
    { "sgName": "Best Friends", "sgAuthor": "Poppins", "sg": "songs/4.mp3", "sgPhoto": "covers/4.jpg" },
    { "sgName": "Heart Broken", "sgAuthor": "Jack grey", "sg": "songs/5.mp3", "sgPhoto": "covers/5.jpg" },
    { "sgName": "Thunder Beats", "sgAuthor": "DJ Walter", "sg": "songs/6.mp3", "sgPhoto": "covers/6.jpg" },
    { "sgName": "Thunder Beats", "sgAuthor": "Stanis", "sg": "songs/7.mp3", "sgPhoto": "covers/7.jpg" },
    { "sgName": "Thunder Beats", "sgAuthor": "Moon Crystal", "sg": "songs/8.mp3", "sgPhoto": "covers/8.jpg" },
    { "sgName": "Thunder Beats", "sgAuthor": "Poppins", "sg": "songs/9.mp3", "sgPhoto": "covers/9.jpg" },
    { "sgName": "Thunder Beats", "sgAuthor": "Johny Stark", "sg": "songs/10.mp3", "sgPhoto": "covers/10.jpg" }
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
        start();
    }
    else {
        playBt.classList.remove("fa-circle-pause");
        playBt.classList.add("fa-circle-play");
        audioElem.pause();
    }
})


function start() {

    audioElem.addEventListener("timeupdate", () => {
        let progress = parseInt((audioElem.currentTime / audioElem.duration) * 100);
        seekBar.value = progress;
    })

}
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
    audioElem = new Audio(songs[i].sg);

    audioElem.currentTime = 0;
    start();
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
    audioElem = new Audio(songs[i].sg);
    start()
    audioElem.play();
    // audioElem.currentTime = 0;
    naam.innerText = songs[i].sgName;
    author.innerText = songs[i].sgAuthor;
    photo.src = songs[i].sgPhoto;
    playBt.classList.remove("fa-circle-play");
    playBt.classList.add("fa-circle-pause");
})

