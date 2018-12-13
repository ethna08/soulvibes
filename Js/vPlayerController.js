var video;
var display;

window.onload = function() {
	video = document.getElementById("video-bg");
        
};

function play() {
    video.play();
}

function pause() {
    video.pause();
}

function stop() {
    video.pause();
    video.currentTime = 0;
}