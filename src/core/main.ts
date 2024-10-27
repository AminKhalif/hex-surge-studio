console.log("Hello world !")

import * as Tone from 'tone';


async function applyBitcrusher(bitDepth: number) {
    // Create a player to load the audio file
    const player = new Tone.Player("src/core/beautiful_girls.mp3").toDestination();

    // Create a BitCrusher effect
    const bitCrusher = new Tone.BitCrusher(bitDepth).toDestination();

    // Connect player to BitCrusher
    player.connect(bitCrusher);

    // Start playing
    await Tone.start();
    player.start();
}

// Adjust bitDepth from 1 to 8 (lower is more "crushed")
applyBitcrusher(4);

