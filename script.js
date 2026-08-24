const pianoKeys = document.querySelectorAll(".piano-keys .key"),
volumeSlider = document.querySelector(".volume-slider input"),
keysCheckbox = document.querySelector(".showKeys-checkBox click");
const orangeTheme = document.getElementById("orangeTheme");

let allKeys = [],
audio = new Audio("tunes/key a.wav");

const playTune=(key) => {
    audio.src = `tunes/${key}.wav`; // passes the audio src based on the key pressed
    audio.play(); // playing audio

    const clickedKey = document.querySelector(`[data-key="${key}"]`); //getting clicked
    clickedKey.classList.add("active"); // adding active class to the piano keys
    setTimeout(() => { // removing active class to the piano keys
        clickedKey.classList.remove("active");
    }, 150);
}

orangeTheme.addEventListener("change", () => {
    pianoKeys.forEach(key => {
        if (key.classList.contains("white")) {
            key.classList.toggle("orange");
        }
    });
});

pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key);
    // calls the play tune function with passing the data-key value
    key.addEventListener("click", () => playTune(key.dataset.key));
})

const handleVolume = (e) => {
    audio.volume = e.target.value;  // range slider as volume bar
} 



const pressedKey = (e) => { // plays the key when the button is pressed on your keyboard
    if (allKeys.includes(`key ${e.key}`)) playTune(`key ${e.key}`);
}
volumeSlider.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressedKey);