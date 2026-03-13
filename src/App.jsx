import { useState } from "react";
import { FLASHCARDS } from "./data/flashcards";
import Cards from "./components/Cards";

import "./App.css";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [max, setMax] = useState(0);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [guess, setGuess] = useState("");
  const [guessStatus, setGuessStatus] = useState(null);
  const [isShuffled, setIsShuffled] = useState(false);
  const [shuffledDeck, setShuffledDeck] = useState([]);

  const deck = isShuffled ? shuffledDeck : FLASHCARDS;
  const isLast = index === deck.length - 1;
  const isFirst = index === 0;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!guess.trim()) {
      return;
    }
    const correct =
      guess.trim().toLowerCase() === deck[index].answer.trim().toLowerCase();
    setGuessStatus(correct ? "correct" : "incorrect");
    setGuess("");
    if (correct) {
      const newCounter = counter + 1;
      setCounter(newCounter);

      if (newCounter > max) {
        setMax(newCounter);
      }
    } else {
      setCounter(0);
    }
  };

  const onhandleChange = (evt) => {
    setGuess(evt.target.value);
  };

  const next = () => {
    setFlipped(false);
    setGuess("");
    setGuessStatus(null);
    setIndex((index) => index + 1);
  };

  const prev = () => {
    setFlipped(false);
    setGuess("");
    setGuessStatus(null);
    setIndex((index) => index - 1);
  };

  const flip = () => {
    setFlipped(!flipped);
  };

  const shuffleArray = () => {
    const shuffled = [...FLASHCARDS];
    let i = shuffled.length - 1;
    let temp;
    while (i > 0) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      temp = shuffled[randomIndex];
      shuffled[randomIndex] = shuffled[i];
      shuffled[i] = temp;
      i--;
    }
    console.log(shuffled);
    setShuffledDeck(shuffled);
    setIsShuffled(true);
    setIndex(0);
    setFlipped(false);
    setGuess("");
    setGuessStatus(null);
  };

  return (
    <div className="page">
      <h1 className="main-title">FlashCards</h1>
      <h3>Build your vocabulary one flip at a time.</h3>
      <Cards
        guess={guess}
        guessStatus={guessStatus}
        onhandleChange={onhandleChange}
        handleSubmit={handleSubmit}
        card={deck[index]}
        onNext={next}
        onPrev={prev}
        index={index}
        onFlip={flip}
        flipped={flipped}
        total={deck.length}
        isLast={isLast}
        isFirst={isFirst}
        shuffleArray={shuffleArray}
        counter={counter}
        max={max}
      />
    </div>
  );
};

export default App;
