import { videoInfoObject } from "./video.js";
import { updateControlPanel } from "./updateControlPanel.js";

const mainVideo = document.querySelector('.main_video').querySelector('video');

const controlPanel = document.querySelector('.control_panel');

const volumeImage = controlPanel.querySelector('.volume_image');
const volumeLine = controlPanel.querySelector('.volume_line');
const dotInVolume = volumeLine.querySelector('.dot');

const volumeDisable = () => {

    if (videoInfoObject.isVolumeOn) {

        volumeImage.style.backgroundImage = 'url(/assets/img/video/volume_off.png)'
        

        videoInfoObject.bufferVolumeValue = videoInfoObject.volumeValue;
        videoInfoObject.volumeValue = 0;
        mainVideo.volume = videoInfoObject.volumeValue/100;
        
        videoInfoObject.isVolumeOn = false;
        updateControlPanel('disableVolume', videoInfoObject.volumeValue);

    } else {

        volumeImage.style.backgroundImage = 'url(/assets/img/video/volume.png)'
        videoInfoObject.volumeValue = videoInfoObject.bufferVolumeValue;
        mainVideo.volume = videoInfoObject.volumeValue/100;

        videoInfoObject.isVolumeOn = true;
        updateControlPanel('previousVolume', videoInfoObject.volumeValue);

    }

}


const dotInVolumeActive = () => {



}


export {volumeDisable, dotInVolumeActive}