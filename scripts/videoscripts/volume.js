import { videoInfoObject } from "./video.js";
import { updateControlPanel } from "./updateControlPanel.js";

const mainVideo = document.querySelector('.main_video').querySelector('video');

const controlPanel = document.querySelector('.control_panel');

const volumeImage = controlPanel.querySelector('.volume_image');
const volumeLine = controlPanel.querySelector('.volume_line');
const dotInVolume = volumeLine.querySelector('.dot');

const volumeDisable = (value) => { /* value принимает true/false => звук включен или выключен при вызове функции */

    if (value) {

        volumeImage.style.backgroundImage = 'url(/assets/img/video/volume.svg)'
        videoInfoObject.volumeValue = videoInfoObject.bufferVolumeValue;
        mainVideo.volume = videoInfoObject.volumeValue;

        videoInfoObject.isVolumeOn = true;
        updateControlPanel('previousVolume', videoInfoObject.volumeValue);

    } else {

        volumeImage.style.backgroundImage = 'url(/assets/img/video/volume_off.svg)'

        videoInfoObject.bufferVolumeValue = videoInfoObject.volumeValue;
        videoInfoObject.volumeValue = 0;
        mainVideo.volume = videoInfoObject.volumeValue;
        
        videoInfoObject.isVolumeOn = false;
        updateControlPanel('disableVolume', videoInfoObject.volumeValue);

    }

}


const dotInVolumeActive = (target) => {

    let newPos = ((((target.clientX - videoInfoObject.volumeBlockParams.left) / (videoInfoObject.volumeBlockParams.width)) * 100) - 4);

    if (newPos > 0 && newPos < 100) {
        
        videoInfoObject.bufferVolumeValue = newPos/100;
        videoInfoObject.volumeValue = newPos/100;

        volumeDisable(true)

        volumeLine.style.background = `linear-gradient(90deg, rgb(113, 7, 7) ${mainVideo.volume*100}%, rgb(196, 196, 196) 0%)`;
        dotInVolume.style.left = `${(mainVideo.volume*100-0.7)}%`;


    }

    if (newPos < 0) {

        volumeLine.style.background = `linear-gradient(90deg, rgb(113, 7, 7) 0%, rgb(196, 196, 196) 0%)`;
        dotInVolume.style.left = `0%`;

        videoInfoObject.bufferVolumeValue = 0;
        videoInfoObject.volumeValue = 0;
        
        volumeDisable(false)

    }

}

const changeVolumeByOriginalPlayer = () => {

    videoInfoObject.volumeValue, videoInfoObject.bufferVolumeValue = mainVideo.volume;
    let newVolume = mainVideo.volume*100;
    volumeLine.style.background = `linear-gradient(90deg, rgb(113, 7, 7) ${newVolume}%, rgb(196, 196, 196) 0%)`;
    dotInVolume.style.left = `${newVolume}%`;

    if (mainVideo.volume == 0) {

        volumeImage.style.backgroundImage = 'url(/assets/img/video/volume_off.svg)'

    } else {

        volumeImage.style.backgroundImage = 'url(/assets/img/video/volume.svg)'

    }

}

const changeVolumeByArrows = (value) => { /* value => цифра принимаемая при вызове */

    if (value > 0) {

        if (mainVideo.volume >= 0.9) {



        } else {
        
            videoInfoObject.bufferVolumeValue += value;
            videoInfoObject.volumeValue += value;
    
            mainVideo.volume = videoInfoObject.volumeValue.toFixed(2);
            let newVolume = mainVideo.volume*100;
    
            volumeLine.style.background = `linear-gradient(90deg, rgb(113, 7, 7) ${newVolume}%, rgb(196, 196, 196) 0%)`;
            dotInVolume.style.left = `${newVolume}%`;

        }


    } else {


        if (mainVideo.volume <= 0.1) {


        } else {

            videoInfoObject.bufferVolumeValue += value;
            videoInfoObject.volumeValue += value;
        
            mainVideo.volume = videoInfoObject.volumeValue.toFixed(2);
            let newVolume = mainVideo.volume*100;
        
            volumeLine.style.background = `linear-gradient(90deg, rgb(113, 7, 7) ${newVolume}%, rgb(196, 196, 196) 0%)`;
            dotInVolume.style.left = `${newVolume}%`;

        }


    }

}


export {volumeDisable, dotInVolumeActive, changeVolumeByOriginalPlayer, changeVolumeByArrows}