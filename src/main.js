const idleVideo = document.getElementById("idle");
const videos = {
    left: document.getElementById("left"),
    right: document.getElementById("right"),
    down: document.getElementById("down"),
    downLeft: document.getElementById("downLeft"),
    downRight: document.getElementById("downRight"),
    up: document.getElementById("up"),
    upLeft: document.getElementById("upLeft"),
    upRight: document.getElementById("upRight"),
};

let currentVideo = idleVideo; // Track the currently playing video

function showVideo(direction) {
    const selectedVideo = videos[direction];

    // Don't switch if the same video is already playing
    if (currentVideo === selectedVideo) return;

    // Hide previous video    
    currentVideo.style.opacity = "0";
    currentVideo.pause();
    

    // Show and play the new video
    selectedVideo.style.opacity = "1";
    selectedVideo.play();

    // Update the currently playing video
    currentVideo = selectedVideo;
}

function resetToIdle() {
    if (currentVideo === idleVideo) return; // Don't reset if idle is already playing

    // Hide current video
    currentVideo.style.opacity = "0";
    currentVideo.pause();

    // Show idle animation
    idleVideo.style.opacity = "1";
    idleVideo.play();

    // Update the current video
    currentVideo = idleVideo;
}

// Event Listeners for Hover Areas
document.addEventListener("mousemove", (e) => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const x = e.clientX;
    const y = e.clientY;

    if (x < width * 0.3 && y < height * 0.3) {
        showVideo("upLeft");
    } else if (x > width * 0.7 && y < height * 0.3) {
        showVideo("upRight");
    } else if (x < width * 0.3 && y > height * 0.7) {
        showVideo("downLeft");
    } else if (x > width * 0.7 && y > height * 0.7) {
        showVideo("downRight");
    } else if (x < width * 0.3) {
        showVideo("left");
    } else if (x > width * 0.7) {
        showVideo("right");
    } else if (y < height * 0.3) {
        showVideo("up");
    } else if (y > height * 0.7) {
        showVideo("down");
    } else {
        resetToIdle();
    }
});