import { videoInfoObject } from "./video.js";

const controlPanel = document.querySelector('.control_panel');

const volumeLine = controlPanel.querySelector('.volume_line');
const dotInVolume = volumeLine.querySelector('.dot');

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

export {updateControlPanel}