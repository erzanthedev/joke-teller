// Declaring DOM Variables
const button = document.getElementById("button");
const audioElement = document.getElementById("audio");

const toggleButton = () => {
  // if statement on the left is "false", the statement on the right changes it to "true" and vice versa.
  // At the beginning before function runs value is false.
  // Once value is function is run from value gets set to true thus button becomes disabled while audio is playing.
  button.disabled = !button.disabled;
};

function tellMe(joke) {
  VoiceRSS.speech({
    key: "68456f51eeaa4e08a3e32077b6c49233",
    src: joke,
    hl: "en-us",
    v: "Linda",
    r: 0,
    c: "mp3",
    f: "44khz_16bit_stereo",
    ssml: false,
  });
}

// Get Joke from API
async function getJokes() {
  // Store JokeAPI
  const apiUrl =
    "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";
  // Store Joke
  let joke = "";

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Checks for a two part joke or single joke
    if (data.setup) {
      joke = `${data.setup}.....${data.delivery}`;
    } else {
      joke = data.joke;
    }
    // Runs Text to Speech
    tellMe(joke);

    // Enable Button when speech to text is completed.
    toggleButton();

    // Set speech speed
    audioElement.defaultPlaybackRate = 1.25;
  } catch (error) {
    // Handle Error
    console.log(`Ooops something went wrong : ${error}`);
  }
}

// Event Listeners
button.addEventListener("click", getJokes); // Runs joke when button clicked
audioElement.addEventListener("ended", toggleButton); // Disables or Enable button when audio has ended playing.
