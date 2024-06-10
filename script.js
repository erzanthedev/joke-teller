// Declaring DOM Variables
const button = document.getElementById("button");
const audioElement = document.getElementById("audio");

function test() {
  VoiceRSS.speech({
    key: "68456f51eeaa4e08a3e32077b6c49233",
    src: "Hi I'm Michael the developer",
    hl: "en-us",
    v: "Linda",
    r: 0,
    c: "mp3",
    f: "44khz_16bit_stereo",
    ssml: false,
  });
}

test();
