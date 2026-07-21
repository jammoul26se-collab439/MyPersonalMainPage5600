const clickSound = new Audio("/ClickSoundTrack.m4a");
clickSound.volume= 1.0;
export function playClick() {
    clickSound.currentTime = 0;
    clickSound.play();
}