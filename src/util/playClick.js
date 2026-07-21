const clickSound = new Audio("/ClickSoundTrack.m4a");
clickSound.volume= 1.0;
let muted = false;
export function setClickMuted(value) {
    muted = value;
}
export function playClick() {
    if(muted)
        return;
    clickSound.currentTime = 0;
    clickSound.play();
}