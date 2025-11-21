import { videoInfoObject } from "./video.js";
import { updateControlPanel } from "./updateControlPanel.js";

const mainVideo = document.querySelector('.main_video').querySelector('video');

const controlPanel = document.querySelector('.control_panel');

const volumeImage = controlPanel.querySelector('.volume_image');
const volumeLine = controlPanel.querySelector('.volume_line');
const dotInVolume = volumeLine.querySelector('.dot');

const volumeDisable = (value) => {

    if (value) {

        volumeImage.style.backgroundImage = 'url(/assets/img/video/volume.png)'
        videoInfoObject.volumeValue = videoInfoObject.bufferVolumeValue;
        mainVideo.volume = videoInfoObject.volumeValue/100;

        videoInfoObject.isVolumeOn = true;
        updateControlPanel('previousVolume', videoInfoObject.volumeValue);

    } else {

        volumeImage.style.backgroundImage = 'url(/assets/img/video/volume_off.png)'
        

        videoInfoObject.bufferVolumeValue = videoInfoObject.volumeValue;
        videoInfoObject.volumeValue = 0;
        mainVideo.volume = videoInfoObject.volumeValue/100;
        
        videoInfoObject.isVolumeOn = false;
        updateControlPanel('disableVolume', videoInfoObject.volumeValue);

    }

}


const dotInVolumeActive = (target) => {

    let newPos = (((target.clientX - videoInfoObject.volumeBlockParams.left) / (videoInfoObject.volumeBlockParams.width)) * 100) - 4;


    if (newPos > 0 && newPos < 100) {

        volumeLine.style.background = `linear-gradient(90deg, rgb(113, 7, 7) ${newPos}%, rgb(196, 196, 196) 0%)`;
        dotInVolume.style.left = `${(newPos)}%`;

        videoInfoObject.bufferVolumeValue = newPos;
        videoInfoObject.volumeValue = newPos;

        volumeDisable(true)

    }

    if (newPos < 0) {

        volumeLine.style.background = `linear-gradient(90deg, rgb(113, 7, 7) 0%, rgb(196, 196, 196) 0%)`;
        dotInVolume.style.left = `0%`;

        videoInfoObject.bufferVolumeValue = 0;
        videoInfoObject.volumeValue = 0;

        volumeDisable(false)

    }

}


export {volumeDisable, dotInVolumeActive}