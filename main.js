let top_video;

/**
 * This gets called when youtube is ready to make video players
 */
function onYouTubeIframeAPIReady() {
    top_video = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: 'RBlmBd3QN-U',
        playerVars: {
          'playsinline': 1
        },
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
      });
}

/**
 * Called when the video player is ready
 * 
 * You can start playback and such in this function safely
 * 
 * @param {Object} event - The event object that contain the video player
 */
function onPlayerReady(e) {
    console.log("Video player is ready");

    e.target.mute();
    e.target.playVideo();
}

/**
 * Called whenever the player starts, pauses, ends, etc
 * 
 * This is fired whenever the player's state changes. Evaluate the player's state
 * in this function and act accordingly
 * 
 * @param {Object} event - The event object that contain the video player
 */
 function onPlayerStateChange(e) {
    console.log("Video player state has changed");
    const container = document.querySelector(".container.image")

    if (e.data === YT.PlayerState.PLAYING) {
        // add the .can_stick to .container.image
        container.classList.add("can_stick");
     }

    if (e.data === YT.PlayerState.PAUSED) {
        // remove the .canstick from .container.image
        container.classList.remove("can_stick");
        container.classList.remove("sticky");
     }
}

const watcher = new Watch(".container.image");

watcher.inView(function () {
    const container = document.querySelector(".container.image.can_stick")
    if (container) {
        container.classList.remove("sticky");
    }
    
}).outView(function () {
    const container = document.querySelector(".container.image.can_stick")
    if (container) {
        container.classList.add("sticky");
    }
})

const close_button = document.querySelector(".stick .fa-close");

close_button.addEventListener("click", function(e) {
    e.preventDefault();

    document.querySelector(".sticky").classList.remove("sticky");
    document.querySelector(".can_stick").classList.remove("can_stick");
    top_video.pauseVideo();
});