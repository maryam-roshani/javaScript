let song_name = document.querySelector(".song-name");
let song_art = document.querySelector(".song-art");
let song_artist = document.querySelector(".singer-name");

let playpause_btn = document.querySelector(".playpause-song");
let next_btn = document.querySelector(".next-song");
let prev_btn = document.querySelector(".prev-song");

let seek_slider = document.querySelector(".seek_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

let song_index = 0;
let isPlaying = false;
let updateTimer;

let curr_song = document.createElement('audio');

let song_list = [{
        name: "Night Owl",
        artist: "Broke For Free",
        image: "Image URL",
        path: "Night_Owl.mp3"
    },
    {
        name: "Enthusiast",
        artist: "Tours",
        image: "Image URL",
        path: "Enthusiast.mp3"
    },
    {
        name: "Shipping Lanes",
        artist: "Chad Crouch",
        image: "Image URL",
        path: "Shipping_Lanes.mp3",
    },
];

function loadSong(song_index) {
    // Clear the previous seek timer
    clearInterval(updateTimer);
    resetValues();

    // Load a new song
    curr_song.src = song_list[song_index].path;
    curr_song.load();

    // Update details of the song
    song_art.src =
        "url(" + song_list[song_index].image + ")";
    song_name.textContent = song_list[song_index].name;
    song_artist.textContent = song_list[song_index].artist;

    // Set an interval of 1000 milliseconds
    // for updating the seek slider
    updateTimer = setInterval(seekUpdate, 1000);

    // Move to the next song if the current finishes playing
    // using the 'ended' event
    curr_song.addEventListener("ended", nextSong);

}


// Function to reset all values to their default
function resetValues() {
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
}

function playPauseSong() {
    // Switch between playing and pausing
    // depending on the current state
    if (!isPlaying) playSong();
    else pauseSong();
}

function playSong() {
    // Play the loaded song
    curr_song.play();
    isPlaying = true;

}

function pauseSong() {
    // Pause the loaded song
    curr_song.pause();
    isPlaying = false;
}

function nextSong() {
    // Go back to the first song if the
    // current one is the last in the song list
    if (song_index < song_list.length - 1)
        song_index += 1;
    else song_index = 0;

    // Load and play the new song
    loadSong(song_index);
    playSong();
}

function prevSong() {
    // Go back to the last song if the
    // current one is the first in the song list
    if (song_index > 0)
        song_index -= 1;
    else song_index = song_list.length - 1;

    // Load and play the new song
    loadSong(song_index);
    playSong();
}

function seekTo() {
    let seekto = curr_song.duration * (seek_slider.value / 100);

    // Set the current song position to the calculated seek position
    curr_song.currentTime = seekto;
}

function seekUpdate() {
    let seekPosition = 0;

    // Check if the current song duration is a legible number
    if (!isNaN(curr_song.duration)) {
        seekPosition = curr_song.currentTime * (100 / curr_song.duration);
        seek_slider.value = seekPosition;

        // Calculate the time left and the total duration
        let currentMinutes = Math.floor(curr_song.currentTime / 60);
        let currentSeconds = Math.floor(curr_song.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(curr_song.duration / 60);
        let durationSeconds = Math.floor(curr_song.duration - durationMinutes * 60);

        // Add a zero to the single digit time values
        if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
        if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
        if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        // Display the updated duration
        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationSeconds;
    }
}


loadSong(song_index);