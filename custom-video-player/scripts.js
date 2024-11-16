const video = document.querySelector('video');
const playBtn = document.querySelector('.toggle');
const volume = document.querySelector('input[name="volume"]');
const playRate = document.querySelector('input[name="playbackRate"');
const skipButtons = document.querySelectorAll('[data-skip]');
const progressBar = document.querySelector('.progress__filled');
const progress = document.querySelector('.progress');
const playerScreen = document.querySelector('.player__video');

progressBar.style.flexBasis = '0%';
let interval;
let mousedown = false;

function playPause(e) {
 
    if(video.paused) {
        video.play();
        playBtn.innerHTML = '❚ ❚';
        interval = setInterval(() => {
            progressBar.style.flexBasis = `${(video.currentTime / video.duration) * 100}%`;
        }, 1000);
    }else {
        video.pause();
        playBtn.innerHTML = '►';
        if(interval) 
            clearInterval(interval);
    }
};

function handleVolume(e) {
    video.volume = e.target.value;
}

function handlePlayRate(e) {
    video.playbackRate = e.target.value;
}

function handleSkip(e) {
    video.currentTime += parseFloat(this.dataset.skip);
}

function scrub(e) {
    if(mousedown){
        const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
        video.currentTime = scrubTime;
    }
    
}

playerScreen.addEventListener('click', playPause);

playBtn.addEventListener('click', playPause);

volume.addEventListener('input', handleVolume);

playRate.addEventListener('input', handlePlayRate);

skipButtons.forEach(btn => btn.addEventListener('click', handleSkip));

progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', scrub);
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

//another way to handle the progress bar
// function handleProgress() {
//      progressBar.style.flexBasis = `${(video.currentTime / video.duration) * 100}%`
// }
// video.addEventListener('timeupdate', handleProgress);