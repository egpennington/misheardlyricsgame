let correctLyrics // Declare correctLyrics globally

const availableSongs = [
    {
        name: "Benny and the Jets",
        lyrics: `
            Say, honey and money, have you seen them yet?
            Ooh, but they're so sweet
            H-H-H-Honey and the Treats
            Oh, but they're wild and they're playful
            Oh, Honey, it's really neat

            They've got candy shoes, a chocolate suit
            You know I read it in a candy wrapper, oh
            H-H-H-Honey and the Treats

            Oh, honey and money, have you seen them yet?
            Oh, but they're so sweet
            H-H-H-H-H-Honey and the Treats
            Oh, but they're wild and they're playful
            Oh, Honey, it's really neat

            They've got candy shoes, a chocolate suit
            You know I read it in a candy wrapper
            H-H-H-Honey and the Treats

            Honey, Honey and the Treats
            Honey, Honey, Honey, Honey and the Treats
            Honey, Honey, Honey, Honey, Honey and the Treats
            Honey, Honey, Honey, Honey and the Treats
            Honey, Honey, Honey, Honey, Honey, Honey, Honey, Honey and the Treats, the Treats, the Treats
            Honey, Honey, Honey, Honey, Honey, Honey, Honey, Honey, Honey, Honey, Honey and the Treats
        `,
        audio: "benny_and_the_jets.mp3",
        spotifyEmbedURL: "https://open.spotify.com/embed/track/0LHzd11GIXVmND7TfQnGiy?utm_source=generator&theme=0"
    },
];

function playRandomSong() {
    const randomSong = availableSongs[Math.floor(Math.random() * availableSongs.length)];

    // Set the correct lyrics for the current song
    correctLyrics = randomSong.lyrics;

    // Display the Spotify iframe
    const spotifyIframe = document.getElementById("spotify-iframe");
    spotifyIframe.src = randomSong.spotifyEmbedURL;
    spotifyIframe.style.display = "block";

    // Display the name of the selected song
    document.getElementById("song-name").innerHTML = `<h2>${randomSong.name}</h2>`;

    // Show the game container
    document.getElementById("game-container").style.display = "block";
}

function checkGuess() {
    if (!correctLyrics) {
        console.error("Correct lyrics not set properly.");
        return;
    }

    const userGuess = document.getElementById("user-input").value;
    const resultContainer = document.getElementById("result-container");

    const userSentences = userGuess.split('.'); // Split user input into sentences

    // Check if at least one user sentence matches a correct sentence
    const isCorrect = userSentences.some(userSentence => {
        if (!userSentence) {
            console.warn("Empty user sentence found.");
            return false;
        }
        return correctLyrics.toLowerCase().includes(userSentence.trim().toLowerCase());
    });

    if (isCorrect) {
        resultContainer.innerHTML = "<p>Correct! You got at least one sentence right!</p>";
    } else {
        resultContainer.innerHTML = "<p>Oops! That's not quite right. Try again!</p>";
    }
}


function autoResize(element) {
    element.style.height = "auto";
    element.style.height = (element.scrollHeight) + "px";
}
