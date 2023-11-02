import React, { useState } from "react";
import LightnessGame from "./classes/lightnessGame.js";
import Palette from "./components/Palette.jsx";

const game = new LightnessGame(7);

function App() {
  console.log("App rendered");
  const [palette, setPalette] = useState(game.playerPalette);
  const [grayscale, setGrayscale] = useState(false);

  const handleCheckAnswer = () => {
    // Update the player's palette
    game.playerPalette = palette;
    
    document.getElementById("incorrect").classList.add("hidden");
    document.getElementById("correct").classList.add("hidden");

    // Check the answer
    const isCorrect = game.checkAnswer();

    if (isCorrect) {
      document.getElementById("correct").classList.remove("hidden");
    } else {
      document.getElementById("incorrect").classList.remove("hidden");
    }

    
    document.getElementById("after-check-buttons").classList.remove("hidden");
  };

  function toggleGrayscale() {
    setGrayscale(!grayscale);
  }

  function showAnswer() {
    setPalette(game.solutionPalette);
  }

  return (
    <div className="container mx-auto flex flex-col justify-center items-center h-full min-h-screen">
      <h1 className="mb-10">Sort the colours by lightness!</h1>
      <div className="flex justify-around w-[100%]">
        <h3>←Darker</h3>
        <h3>Lighter→</h3>
      </div>
      <Palette
        palette={palette}
        setPalette={setPalette}
        grayscale={grayscale}
      />
      <h1 id="correct" className="hidden">✅ Correct!</h1>
      <h2 id="incorrect" className="hidden">❌ Sorry, incorrect!</h2>
      <button
        className="border border-black mt-5 p-3"
        onClick={handleCheckAnswer}
      >
        Check my answer
      </button>
      <div id="after-check-buttons" className="flex gap-5 mt-5 hidden">
        <button
          onClick={toggleGrayscale}
        >
          Toggle greyscale
        </button> <p className="p-3">or</p>
        <button
          onClick={showAnswer}
        >
          Show answer
        </button>
      </div>
    </div>
  );
}

export default App;
