const video = document.getElementById('video')
const play = document.getElementById('play')
const stop = document.getElementById('stop')
const prorgress = document.getElementById('progress')
const timestamp = document.getElementById('timestamp')



function toogleVideoStatus() {
    video.paused ? video.play() : video.pause()
}

function updatePlayIcon() {
    video.paused ? play.innerHTML = `<i class="fa fa-play fa-2x"></i>` :
        play.innerHTML = `<i class="fa fa-pause fa-2x"></i>`
}

function setVideoProgress() {
    video.currentTime = (+prorgress.value * video.duration) / 100
}

function stopVideo() {
    video.currentTime = 0;
    video.pause()
}

function updateProgress() {
    progress.value = (video.currentTime / video.duration) * 100
    let mins = Math.floor(video.currentTime / 60)
    mins < 10 ? mins = '0' + String(mins) : false
    let secs = Math.floor(video.currentTime % 60)
    secs < 10 ? secs = '0' + String(secs) : false
    timestamp.innerHTML = `${mins}:${secs}`
}

// Events
video.addEventListener('click', toogleVideoStatus)
video.addEventListener('pause', updatePlayIcon)
video.addEventListener('play', updatePlayIcon)
video.addEventListener('timeupdate', updateProgress)

play.addEventListener('click', toogleVideoStatus)

stop.addEventListener('click', stopVideo)

prorgress.addEventListener('change', setVideoProgress)