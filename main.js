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

    {
        name: "Yellow Ledbetter",
        lyrics: `
            Unsealed on a porch a letter sat
            Then you said I wanna leave it again
            Once I saw her on a beach of weathered sand
            And on the sand I wanna leave it again, yeah

            On a weekend wanna wish it all away
            And they called and I said that I want what I said
            And then I call out again
            And the reason oughtta leave her calm, I know
            I said I don't know whether I'm the boxer or the bag

            Oh yeah, can you see them
            Out on the porch
            Yeah but they don't wave
            I see them
            'Round the front way, yeah
            And I know and I know I don't want to stay
            Make me cry

            I see
            I don't know, there's something else
            I wanna drum it all away
            Oh, I said I don't, I don't know whether I'm the boxer or the bag

            Oh yeah, can you see them
            Out on the porch
            Yeah but they don't wave
            I see them
            'Round the front way, yeah
            And I know and I know I don't want to stay
            I don't wanna stay
            I don't wanna stay
            I don't wanna stay, oh no

            Yeah
            Oh, oh
            Oh, oh
        `,
        // audio: "benny_and_the_jets.mp3",
        spotifyEmbedURL: "https://open.spotify.com/embed/track/3bE5slaVEfaDreqARl6k4M?si=4c1e5473484f48ac"
    },
    {
        name: "Louie Louie",
        lyrics: `
            Louie, Louie, me gotta go
            Louie, Louie, me gotta go

            Fine little girl she waits for me
            Me catch the ship for cross the sea
            I sail the ship all alone
            I never think me make it home

            Louie, Louie, oh, me gotta go
            Louie, Louie, me gotta go

            Three nights and days me sail the sea
            Me think of girl constantly
            On the ship I dream she there
            I smell the rose in her hair

            Louie, Louie, me gotta go
            Louie, Louie, me gotta go

            Me see Jamaica moon above
            It won't be long, me see my love
            Me take her in my arms and then
            I tell her I never leave again
            Louie, Louie, oh, me gotta go
            Louie, Louie, me gotta go
            I say, me gotta go
            I say, me gotta go
        `,
        // audio: "benny_and_the_jets.mp3",
        spotifyEmbedURL: "https://open.spotify.com/embed/track/0iA3xXSkSCiJywKyo1UKjQ?si=9535c92c59274910"
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

const aboutEl = document.getElementById("about-el")

aboutEl.addEventListener("click", () => {
    const aboutModalEl = document.getElementById("about-modal-el")
    const aboutCloseEl = document.getElementById("about-close-el")
    aboutModalEl.style.display = "block"

    aboutCloseEl.addEventListener("click", () => {
      aboutModalEl.style.display = "none"
    })
})
