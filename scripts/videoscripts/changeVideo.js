import { videoInfoObject } from "./video.js";
import { updateControlPanel } from "./updateControlPanel.js";

const mainVideo = document.querySelector('.main_video').querySelector('video');

const changeMainVideo = (event) => {

    const tagName = event.target.localName;
    const className = event.target.classList[0];

    if (tagName == 'video' || className == 'youtube_play_button') {

        const parentID = className == 'youtube_play_button' ? event.target.closest('div').parentElement.parentElement : event.target.closest('div').parentElement;

        const videoElement = parentID.querySelector('video');
        const videoName = parentID.querySelector('.video_name').textContent;

        const targetURL = videoElement.src;
        const targetPoster = videoElement.poster;
        const targetID = parentID.id;



        videoElement.src = mainVideo.src;
        videoElement.poster = mainVideo.poster;
        
        parentID.querySelector('.video_name').textContent = videoInfoObject.videoTitle;

        
        mainVideo.src = `rukekarua.github.io${targetURL}`;
        mainVideo.poster = targetPoster;
        mainVideo.id = targetID;
        videoInfoObject.videoTitle = videoName;
        
        videoInfoObject.mainVideo = mainVideo.id;

        updateControlPanel('flushPanel')

    }

}

export {changeMainVideo};