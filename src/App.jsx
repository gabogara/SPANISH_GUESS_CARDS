import { useState } from "react";
import { FLASHCARDS } from "./data/flashcards";
import Cards from "./components/Cards";

import "./App.css";

const App = () => {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [guess, setGuess] = useState("");
  const [guessStatus, setGuessStatus] = useState(null);

  const next = () => {
    setFlipped(false);
    setGuess("");
    setIndex((index) => (index + 1) % FLASHCARDS.length);
  };

  const prev = () => {
    setFlipped(false);
    setGuess("");
    setIndex((index) => (index - 1 + FLASHCARDS.length) % FLASHCARDS.length);
  };

  const flip = () => {
    setFlipped(!flipped);
  };

  const random = () => {
    setFlipped(false);
    setGuess("");
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * FLASHCARDS.length);
    } while (newIndex === index);
    setIndex(newIndex);
  };

  return (
    <div className="page">
      <h1 className="main-title">FlashCards</h1>
      <h3>Build your vocabulary one flip at a time.</h3>
      <Cards
        guess={guess}
        setGuess={setGuess}
        guessStatus={guessStatus}
        card={FLASHCARDS[index]}
        onNext={next}
        onPrev={prev}
        onRandom={random}
        index={index}
        onFlip={flip}
        flipped={flipped}
        total={FLASHCARDS.length}
      />
    </div>
  );
};

export default App;
