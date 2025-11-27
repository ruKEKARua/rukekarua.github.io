import { videoInfoObject } from "./video.js";
import { changeVolumeByOriginalPlayer } from "./volume.js";

const mainVideo = document.querySelector('.main_video').querySelector('video');

const fullscreenHandler = () => { 

    if (videoInfoObject.isFullscreenOn == false) {

        mainVideo.requestFullscreen();
        videoInfoObject.isFullscreenOn = true;
        mainVideo.addEventListener('volumechange', changeVolumeByOriginalPlayer)
    
    }

    if (document.fullscreenElement != null) {

        document.exitFullscreen();
        isFullscreenChanged();

    }

}

const isFullscreenChanged = () => {

    if (document.fullscreenElement == null) {

        videoInfoObject.isFullscreenOn = false;
        mainVideo.removeEventListener('volumechange', changeVolumeByOriginalPlayer)

    }
 
}

export {fullscreenHandler, isFullscreenChanged};