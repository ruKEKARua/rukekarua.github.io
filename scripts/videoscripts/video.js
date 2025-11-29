import { updateTimeline, dotTimelineActive } from "./timeline.js";
import { changeImageBigPlay } from "./playButton.js";
import { volumeDisable, dotInVolumeActive } from "./volume.js";
import { fullscreenHandler, isFullscreenChanged } from "./fullscreen.js";
import { keybindingsHandler } from "./keybinds.js";
import { changeMainVideo } from "./changeVideo.js";
import { changePage } from "./videoSlider.js";

const mainVideo = document.querySelector('.main_video').querySelector('video');
const youtubeVideos = document.querySelectorAll('.youtube_video');

const controlPanel = document.querySelector('.control_panel');
const bigPlayButton = controlPanel.querySelector('#bigPlayButton');

const playButtonInPanel = controlPanel.querySelector('.button_play_by_panel_image');
const timeline = controlPanel.querySelector('.timeline');
const dotInTimeline = timeline.querySelector('.dot');

const volumeImage = controlPanel.querySelector('.volume_image');
const volumeLine = controlPanel.querySelector('.volume_line');
const dotInVolume = volumeLine.querySelector('.dot');

const fullscreen = controlPanel.querySelector('.fullscreen_wrapper');

const arrowLeft = document.querySelector('.arrow_button_left')
const arrowRight = document.querySelector('.arrow_button_right')


const videoInfoObject = {

    mainVideo: 'video0',
    videoTitle: 'Louvre Intro',


    isPlay: false,
    isFullscreenOn: false,
    isVolumeOn: true,

    bufferVolumeValue: 0.1,
    volumeValue: 0.1,

    speed: 1,

    currentTime: 0,

    timelineBlockParams: timeline.getBoundingClientRect(),

    volumeBlockParams: volumeLine.getBoundingClientRect(),
    

}


bigPlayButton.addEventListener('click', changeImageBigPlay); /* секция отвечающая за включение/выключение видео */
mainVideo.addEventListener('click', changeImageBigPlay);
mainVideo.volume = videoInfoObject.volumeValue;
playButtonInPanel.addEventListener('click', changeImageBigPlay);

volumeImage.addEventListener('click', () => videoInfoObject.isVolumeOn == true ? volumeDisable(false) : volumeDisable(true)) /* секция отвечающая за включение/отключение звука и его изменение */

// считывание движение курсора при захвате точки
const dotInVolumeHandler = (target) => {

    
    let newPos = (((target.clientX - videoInfoObject.volumeBlockParams.left) / (videoInfoObject.volumeBlockParams.width)) * 100) - 4;
    
    videoInfoObject.bufferVolumeValue = newPos/100;
    videoInfoObject.volumeValue = newPos/100;

    volumeLine.style.background = `linear-gradient(90deg, rgb(113, 7, 7) ${mainVideo.volume*100}%, rgb(196, 196, 196) 0%)`;
    dotInVolume.style.left = `${(mainVideo.volume*100)}%`;


    volumeDisable(true)

    dotInVolume.addEventListener('mousemove', dotInVolumeActive)
    document.querySelector('#video_journey').addEventListener('mousemove', dotInVolumeActive)

}

// отключение считывания
const disableDotHandlerInVolumeLine = () => {

    dotInVolume.removeEventListener('mousemove', dotInVolumeActive) 
    document.querySelector('#video_journey').removeEventListener('mousemove', dotInVolumeActive)

}

dotInVolume.addEventListener('mousedown', dotInVolumeHandler)
volumeLine.addEventListener('mousedown', dotInVolumeHandler)
document.querySelector('#video_journey').addEventListener('mouseup', disableDotHandlerInVolumeLine)

dotInVolume.ondragstart = () => false // функция, чтобы точка не раздваивалась при перемещении

/* удержание точки на таймлайне для изменения тайминга видео, а также секция отвечающая за таймлайн*/
const dotInTimelineHandler = (target) => {

    let newPos = ((target.clientX - videoInfoObject.timelineBlockParams.left) / (videoInfoObject.timelineBlockParams.width)) * 100;

    timeline.style.background = `linear-gradient(90deg, rgb(113, 7, 7) ${newPos}%, rgb(196, 196, 196) 0%)`;
    dotInTimeline.style.left = `${(newPos-0.8)}%`;
    mainVideo.currentTime = (mainVideo.duration * (newPos / 100)).toFixed(0);

    dotInTimeline.addEventListener('mousemove', dotTimelineActive)
    document.querySelector('#video_journey').addEventListener('mousemove', dotTimelineActive)

}

const disableDotHandlerInTimeline = () => {
    
    dotInTimeline.removeEventListener('mousemove', dotTimelineActive) 
    document.querySelector('#video_journey').removeEventListener('mousemove', dotTimelineActive)

}

mainVideo.addEventListener('timeupdate', updateTimeline)
dotInTimeline.addEventListener('mousedown', dotInTimelineHandler)
timeline.addEventListener('mousedown', dotInTimelineHandler)
document.querySelector('#video_journey').addEventListener('mouseup', disableDotHandlerInTimeline)

dotInTimeline.ondragstart = () => false // функция, чтобы точка не раздваивалась при перемещении


fullscreen.addEventListener('click', fullscreenHandler) // фуллскрин
document.addEventListener('fullscreenchange', isFullscreenChanged)


document.addEventListener('keydown', keybindingsHandler) // управление поведения видео клавиатурой
window.addEventListener('keydown', (e) => {   /* отключение скролла на стрелочки и пробел */
  if (e.target === document.body) {  
    if (e.key == " " || e.key == "ArrowUp" || e.key == "ArrowDown") {

        e.preventDefault();  

    }
  }
  
});


// блок отвечает за переключение видео

youtubeVideos.forEach((element) => {

    element.addEventListener('click', changeMainVideo)

})



// блок отвечающий за переключение слайдера

arrowLeft.addEventListener('click', changePage)
arrowRight.addEventListener('click', changePage)


export {videoInfoObject};