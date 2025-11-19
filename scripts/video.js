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

    videoInfoObject.currentTime =  mainVideo.currentTime;
    timeline.style.background = `linear-gradient(90deg, rgb(113, 7, 7) ${videoInfoObject.currentTime}%, rgb(196, 196, 196) 0%)`;
    dotInTimeline.style.left = `${Math.floor(videoInfoObject.currentTime)}%`;
    console.log(videoInfoObject.currentTime)

}

mainVideo.addEventListener('timeupdate', updateTimeline)



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