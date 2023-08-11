import { managePlayPause } from "./managePlayPause.js";
import { createSettingsElement } from "./settingsDevelopment.js";
import { settingsVideoSizing } from "./settingsVideoSizing.js";

window.addEventListener('DOMContentLoaded', () => {
    const contentContainers = document.querySelectorAll('.content-container');
    const previewVideos = document.querySelectorAll('.video-sequence.preview');
    const moreBtns = document.querySelectorAll('.more-btn.preview');
    for (let i = 0; i < contentContainers.length; i++) {
        contentContainers[i].addEventListener('mouseover', () => {
            previewVideos[i].play();
        });
        contentContainers[i].addEventListener('mouseout', () => {
            previewVideos[i].pause();
        });
        moreBtns[i].addEventListener('click', () => {
            createSettingsElement(i);
            settingsVideoSizing();
            managePlayPause();
        });
    }
    document.addEventListener('click', (event) => {
        const settingsBg = document.querySelector('.settings-bg.settings');
        if (event.target === settingsBg) {
            settingsBg.remove();
        }
    });
    document.addEventListener('keydown', (event) => {
        if (event.keyCode === 27) {
            const settingsBg = document.querySelector('.settings-bg.settings');
            settingsBg.remove();
        }
    });

});