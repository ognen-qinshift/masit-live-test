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

//
let idleTimeout;
//


function loopIdleVideo() {
    idleVideo.play().then(() => {
        setTimeout(() => {
            idleVideo.pause();

            const pauseTime = Math.random() * 4000 + 2000; // Random pause between 2-6 seconds
            setTimeout(loopIdleVideo, pauseTime);

        }, Math.random() < 0.5 ? 2050 : 4050); // Play for either ~2s or ~4.3s
    }).catch((error) => {
        console.warn("Idle video play() interrupted:", error);
    });
}

// Start the loop
loopIdleVideo();

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


//
function startIdleBlinking() {
    if (currentVideo === idleVideo) return; // Don't reset if idle is already playing

    // Hide current video
    currentVideo.style.opacity = "0";
    currentVideo.pause();

    // Show idle animation
    idleVideo.style.opacity = "1";
    idleVideo.currentTime = 0; // Restart video
    idleVideo.play();

    // Update the current video
    currentVideo = idleVideo;
}


// Event Listeners for Hover Areas
document.addEventListener("mousemove", (e) => {

    //
    clearTimeout(idleTimeout);
    //

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

    //
    // Set idle detection
    idleTimeout = setTimeout(startIdleBlinking, 6000); // Start blinking after 3s of inactivity
    //
});