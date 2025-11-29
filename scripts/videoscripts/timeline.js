import { changeImageBigPlay, changePlayButton } from "./playButton.js";
import { videoInfoObject } from "./video.js";

const mainVideo = document.querySelector('.main_video').querySelector('video');

const controlPanel = document.querySelector('.control_panel');

const timeline = controlPanel.querySelector('.timeline');
const dotInTimeline = timeline.querySelector('.dot');

const updateTimeline = () => {

    videoInfoObject.currentTime =  (mainVideo.currentTime * 100) / mainVideo.duration;
    timeline.style.background = `linear-gradient(90deg, rgb(113, 7, 7) ${videoInfoObject.currentTime}%, rgb(196, 196, 196) 0%)`;
    dotInTimeline.style.left = `${Math.floor(videoInfoObject.currentTime)}%`;

    if (videoInfoObject.currentTime == 100) {

        mainVideo.pause();
        changePlayButton(true)

    }

}

const dotTimelineActive = (target) => {

    let newPos = ((target.clientX - videoInfoObject.timelineBlockParams.left) / (videoInfoObject.timelineBlockParams.width)) * 100;

    if ((newPos) > 0 && (newPos) < 100) {

        timeline.style.background = `linear-gradient(90deg, rgb(113, 7, 7) ${newPos}%, rgb(196, 196, 196) 0%)`;
        dotInTimeline.style.left = `${(newPos-0.8)}%`;

        mainVideo.currentTime = (mainVideo.duration * (newPos / 100)).toFixed(0);

    }

}

const changeTimelineByArrows = (value) => { /* принимает секунды, насколько сместить таймлайн */

    mainVideo.currentTime += value;

}

export {updateTimeline, dotTimelineActive, changeTimelineByArrows};