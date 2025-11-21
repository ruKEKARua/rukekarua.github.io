import { videoInfoObject } from "./video.js";

const mainVideo = document.querySelector('.main_video').querySelector('video');

const controlPanel = document.querySelector('.control_panel');
const bigPlayButton = controlPanel.querySelector('#bigPlayButton');
const playButtonInPanel = controlPanel.querySelector('.button_play_by_panel_image');


const changeImageBigPlay = () => {

    if (videoInfoObject.isPlay) {

        bigPlayButton.style.backgroundImage = 'url(/assets/img/video/play.png)';
        playButtonInPanel.style.backgroundImage = 'url(/assets/img/video/play_in_conrol_panel.png)'
        videoInfoObject.isPlay = false;
        mainVideo.pause();

    } else {

        bigPlayButton.style.backgroundImage = 'url()'
        playButtonInPanel.style.backgroundImage = 'url(/assets/img/video/stop.png)'

        mainVideo.volume = videoInfoObject.volumeValue/100;

        videoInfoObject.isPlay = true;
        mainVideo.play();
        

    }
    
    
}

export {changeImageBigPlay};