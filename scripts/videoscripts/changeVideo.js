import { videoInfoObject } from "./video.js";
import { videoSliderArray } from "./video.js";
import { updateControlPanel } from "./updateControlPanel.js";

const mainVideo = document.querySelector('.main_video').querySelector('video');
const youtubeVideos = document.querySelectorAll('.youtube_video');



const changeMainVideo = (event) => {

    const targetURL = event.target.src;
    const targetPoster = event.target.poster;
    const targetID = event.target.id;

    document.querySelector(`#${targetID}`).src = mainVideo.src
    document.querySelector(`#${targetID}`).poster = mainVideo.poster
    document.querySelector(`#${targetID}`).id = mainVideo.id

    mainVideo.src = targetURL;
    mainVideo.poster = targetPoster;
    mainVideo.id = targetID;
    
    
    updateControlPanel('flushPanel')

}

export {changeMainVideo};