const mainVideo = document.querySelector('.main_video').querySelector('video');

const controlPanel = document.querySelector('.control_panel');
const bigPlayButton = controlPanel.querySelector('#bigPlayButton');

const playButtonInPanel = controlPanel.querySelector('.button_play_by_panel_image');
const timeline = controlPanel.querySelector('.timeline');
const dotInTimeline = timeline.querySelector('.dot');

const volumeImage = controlPanel.querySelector('.volume_image');
const volumeLine = controlPanel.querySelector('.volume_line');
const dotInVolume = volumeLine.querySelector('.dot');

const fullscreen = controlPanel.querySelector('.fullscreen_image');


const videoInfoObject = {

    isPlay: false,
    isVolumeOn: true,

    bufferVolumeValue: 38,
    volumeValue: 38,

    currentTime: 0,

    timelineBlockParams: timeline.getBoundingClientRect(),

    volumeBlockParams: volumeLine.getBoundingClientRect(),
    

}


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

bigPlayButton.addEventListener('click', changeImageBigPlay);
mainVideo.addEventListener('click', changeImageBigPlay);
playButtonInPanel.addEventListener('click', changeImageBigPlay);


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

volumeImage.addEventListener('click', volumeDisable)



const updateTimeline = () => {

    videoInfoObject.currentTime =  (mainVideo.currentTime * 100) / mainVideo.duration;
    timeline.style.background = `linear-gradient(90deg, rgb(113, 7, 7) ${videoInfoObject.currentTime}%, rgb(196, 196, 196) 0%)`;
    dotInTimeline.style.left = `${Math.floor(videoInfoObject.currentTime)}%`;

    if (videoInfoObject.currentTime == 100) {

        changeImageBigPlay()

    }

}

mainVideo.addEventListener('timeupdate', updateTimeline)


const dotTimelineActive = (target) => {

    let newPos = ((target.clientX - videoInfoObject.timelineBlockParams.left) / (videoInfoObject.timelineBlockParams.width)) * 100;

    if ((newPos) > 0 && (newPos) < 100) {

        timeline.style.background = `linear-gradient(90deg, rgb(113, 7, 7) ${newPos}%, rgb(196, 196, 196) 0%)`;
        dotInTimeline.style.left = `${(newPos-0.8).toFixed(1)}%`;

        mainVideo.currentTime = (mainVideo.duration * (newPos / 100)).toFixed(0);

    }

}


const dotInTimelineHandler = () => {

    dotInTimeline.addEventListener('mousemove', dotTimelineActive)
    document.querySelector('#video_journey').addEventListener('mousemove', dotTimelineActive)

}

const disableDotHandlerInTimeline = () => {
    
    dotInTimeline.removeEventListener('mousemove', dotTimelineActive) 
    document.querySelector('#video_journey').removeEventListener('mousemove', dotTimelineActive)

}


dotInTimeline.addEventListener('mousedown', dotInTimelineHandler)
timeline.addEventListener('mousedown', dotInTimelineHandler)
document.querySelector('#video_journey').addEventListener('mouseup', disableDotHandlerInTimeline)

dotInTimeline.ondragstart = () => false



const updateControlPanel = (type, value) => {

    switch (type) {
        case 'previousVolume':
            
            volumeLine.style.background = `linear-gradient(90deg, rgb(113, 7, 7) ${value}%, rgb(196, 196, 196) 1%)`;        
            dotInVolume.style.left = `${videoInfoObject.volumeValue}%`;
            break;
    
        case 'disableVolume':

            volumeLine.style.background = `linear-gradient(90deg, rgb(113, 7, 7) ${value}%, rgb(196, 196, 196) 1%)`;        
            dotInVolume.style.left = `${videoInfoObject.volumeValue}%`;

            break;
        
        default:
            break;
    }
    

}