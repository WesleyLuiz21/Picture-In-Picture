const VideoElement = document.getElementById('video')
const button = document.getElementById('btn');

// async function, prompt to select media stream, pass video element and then play

async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        VideoElement.srcObject = mediaStream;
        VideoElement.onloadedmetadata = () => {
            VideoElement.play();
        }
    } catch (error) {
        // Catch error Here
        console.log('error sorry buddy', error);
    }
}

button.addEventListener('click', async () => {
    // Disable button
    button.disabled = true;
    // Start picture in picture
    await VideoElement.requestPictureInPicture();
    // Reset Button
    button.disabled = false;
});

// On load
selectMediaStream();