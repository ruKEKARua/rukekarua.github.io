import { videoInfoObject } from "./video.js";
import { changeImageBigPlay } from "./playButton.js";
import { volumeDisable } from "./volume.js";
import { changeVolumeByArrows } from "./volume.js";
import { fullscreenHandler } from "./fullscreen.js";
import { changeTimelineByArrows } from "./timeline.js";
import { updateControlPanel } from "./updateControlPanel.js";

const mainVideo = document.querySelector('.main_video').querySelector('video');

const newVolume = 0.10;
const newTime = 0.50;
const newPlayback = 0.25;

const keybindingsHandler = (event) => {

    if (document.activeElement == mainVideo) {
    
        if (event.shiftKey && event.code == 'Comma') { 
        
            updateControlPanel('slower', -newPlayback)

        }

        if (event.shiftKey && event.code == 'Period') { 

            updateControlPanel('faster', newPlayback)
        
        }

        switch (event.code) {
            
            case "Space":
            
                event.preventDefault(); 

                changeImageBigPlay()

                break;

            case "KeyM":

                videoInfoObject.isVolumeOn == true ? volumeDisable(false) : volumeDisable(true)

                break;

            case "ArrowUp":

                event.preventDefault(); 

                changeVolumeByArrows(newVolume)

                break;

            case "ArrowDown":

                event.preventDefault(); 

                changeVolumeByArrows(-newVolume)

                break;

            case "ArrowLeft":

                changeTimelineByArrows(-newTime)

                break;

            case "ArrowRight":

                changeTimelineByArrows(newTime)

                break;

            case "KeyF":

                fullscreenHandler();

                break;

            default:
                break;
        }
    }

}

export {keybindingsHandler};