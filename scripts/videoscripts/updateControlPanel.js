import { videoInfoObject } from "./video.js";
import { changeImageBigPlay, changePlayButton } from "./playButton.js";

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

const updateControlPanel = (type, value) => {

    switch (type) {
        case 'previousVolume':
            
            volumeLine.style.background = `linear-gradient(90deg, rgb(113, 7, 7) ${mainVideo.volume*100}%, rgb(196, 196, 196) 1%)`;        
            dotInVolume.style.left = `${mainVideo.volume*100}%`;
            break;
    
        case 'disableVolume':

            volumeLine.style.background = `linear-gradient(90deg, rgb(113, 7, 7) ${mainVideo.volume*100}%, rgb(196, 196, 196) 1%)`;        
            dotInVolume.style.left = `${mainVideo.volume*100}%`;

            break;

        case 'faster':

            if (mainVideo.playbackRate != 2) {

                mainVideo.playbackRate += value;
                videoInfoObject.speed = mainVideo.playbackRate;

            }

            break;

        case 'slower':

            if (mainVideo.playbackRate != 0.25) {

                mainVideo.playbackRate += value;
                videoInfoObject.speed = mainVideo.playbackRate;

            }

            break;

        case 'flushPanel':

            mainVideo.pause();
            changePlayButton(true);
            timeline.style.background = `linear-gradient(90deg, rgb(113, 7, 7) 0%, rgb(196, 196, 196) 0%)`;
            dotInTimeline.style.left = `0%`;
            

            break;

        default:
            break;
    }
    

}

export {updateControlPanel}