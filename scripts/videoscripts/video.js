import { updateControlPanel } from "./updateControlPanel.js";
import { updateTimeline, dotTimelineActive } from "./timeline.js";
import { changeImageBigPlay } from "./playButton.js";
import { volumeDisable, dotInVolumeActive } from "./volume.js";

const mainVideo = document.querySelector('.main_video').querySelector('video');

const controlPanel = document.querySelector('.control_panel');
const bigPlayButton = controlPanel.querySelector('#bigPlayButton');

const playButtonInPanel = controlPanel.querySelector('.button_play_by_panel_image');
const timeline = controlPanel.querySelector('.timeline');
const dotInTimeline = timeline.querySelector('.dot');

const volumeImage = controlPanel.querySelector('.volume_image');
const volumeLine = controlPanel.querySelector('.volume_line');
const dotInVolume = volumeLine.querySelector('.dot');

const fullscreen = controlPanel.querySelector('.fullscreen_image');


const videoInfoObject = {

    isPlay: false,
    isVolumeOn: true,

    bufferVolumeValue: 36,
    volumeValue: 36,

    currentTime: 0,

    timelineBlockParams: timeline.getBoundingClientRect(),

    volumeBlockParams: volumeLine.getBoundingClientRect(),
    

}



bigPlayButton.addEventListener('click', changeImageBigPlay); /* секция отвечающая за включение/выключение видео */
mainVideo.addEventListener('click', changeImageBigPlay);
playButtonInPanel.addEventListener('click', changeImageBigPlay);

volumeImage.addEventListener('click', () => videoInfoObject.isVolumeOn == true ? volumeDisable(false) : volumeDisable(true)) /* секция отвечающая за включение/отключение звука и его изменение */

// считывание движение курсора при захвате точки
const dotInVolumeHandler = (target) => {
    let newPos = (((target.clientX - videoInfoObject.volumeBlockParams.left) / (videoInfoObject.volumeBlockParams.width)) * 100) - 4;

    volumeLine.style.background = `linear-gradient(90deg, rgb(113, 7, 7) ${newPos}%, rgb(196, 196, 196) 0%)`;
    dotInVolume.style.left = `${(newPos)}%`;

    videoInfoObject.bufferVolumeValue = newPos;
    videoInfoObject.volumeValue = newPos;

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






export {videoInfoObject};