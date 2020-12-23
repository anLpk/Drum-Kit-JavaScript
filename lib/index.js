// console.log("Hello from inside");
const volumeDown = document.querySelector(".fa-volume-down");
const volumeUp = document.querySelector(".fa-volume-up");
const volumeValue = document.querySelector(".volume");

function playSound(e) {
// console.log("Hey");
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  // Adjusting Volume
  // console.log(volume.value);
  audio.volume = volumeValue.value;
  // console.log(key);
  if (!audio) return;
  // console.log(audio.currentTime);
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing"); //adding the css style.
  setTimeout(function () {
  // removing the class after 0.1 sec
  key.classList.remove("playing");}, 70);
}
window.addEventListener("keydown", playSound);

volumeDown.addEventListener("click", (event) => {
  // console.log("It is working...")
  volumeValue.value = 0;
})

volumeUp.addEventListener("click", (event) => {
  // console.log("It is working...")
  volumeValue.value = 1;
})
