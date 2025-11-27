import { videoInfoObject } from "./video.js";

const mainVideo = document.querySelector('.main_video').querySelector('video');

const controlPanel = document.querySelector('.control_panel');
const bigPlayButton = controlPanel.querySelector('#bigPlayButton');
const playButtonInPanel = controlPanel.querySelector('.button_play_by_panel_image');


const changeImageBigPlay = () => {

    if (videoInfoObject.isFullscreenOn == false) {

        
        if (mainVideo.paused) { /* если видео остановлено */
 
            videoInfoObject.isPlay = true;
            
            mainVideo.play();
            changePlayButton(false)            
            
        } else {
            
            videoInfoObject.isPlay = false;

            mainVideo.pause();
            changePlayButton(true)

        }

    } else {

        if (mainVideo.paused) { /* если видео остановлено */

            changePlayButton(false);

        } else {

            changePlayButton(true);

        }

    }
    
}

const changePlayButton = (value) => {
    
    if (value) {

        bigPlayButton.style.backgroundImage = 'url(/assets/img/video/play.svg)';

        playButtonInPanel.style.backgroundImage = 'url(/assets/img/video/play_in_conrol_panel.svg)'

    } else {

        bigPlayButton.style.backgroundImage = 'url()';

        playButtonInPanel.style.backgroundImage = 'url(/assets/img/video/stop.svg)'


    }

}

export {changeImageBigPlay, changePlayButton};