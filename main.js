// global variable for the player
var player;

let playpause_btn = document.querySelector(".playpause-track");
let isPlaying = false;

// this function gets called when API is ready to use
function onYouTubePlayerAPIReady() {
    // create the global player from the specific iframe (#video)
    player = new YT.Player('frame', {
        events: {
            // call this function when player is ready to use
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {}

function playpauseTrack(){
    if(!isPlaying){
        player.playVideo();
        isPlaying = true;
        playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
    }else{
        player.pauseVideo();
        isPlaying = false;
        playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
    }
}

function previousTrack(){
    player.previousVideo();
}

function nextTrack(){
    player.nextVideo();
}