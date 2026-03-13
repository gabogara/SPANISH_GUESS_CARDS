const Cards = ({
  card,
  guess,
  guessStatus,
  flipped,
  handleSubmit,
  onhandleChange,
  onNext,
  onPrev,
  onFlip,
  index,
  total,
  isLast,
  isFirst,
  shuffleArray,
  counter,
  max,
}) => {
  const formatWord = (word) => {
    return word.replace("-", " ").replace(/^\w/, (c) => c.toUpperCase());
  };

  return (
    <div className="card-wrapper">
      <p>
        Current Streak: {counter}
        {max > 0 && <span> Longest Streak: {max}</span>}
      </p>
      <p>Category: {formatWord(card.category)}</p>
      <p className={`difficulty ${card.difficulty}`}>
        Difficulty: {formatWord(card.difficulty)}
      </p>
      <span>
        {index + 1} / {total}
      </span>
      <div className="scene" onClick={onFlip}>
        <div className={`inner ${flipped ? "flipped" : ""}`}>
          <div className={`face front ${card.category}`}>
            <img
              className="flash-img"
              src={card.image}
              alt={`image for question ${index}`}
            />
            <p>{card.english}</p>
          </div>

          <div className="face back">
            <p>{card.answer}</p>
          </div>
        </div>
      </div>
      <div className="guess-section">
        <label htmlFor="guess-input">Your answer:</label>
        <form className="guess-form" onSubmit={handleSubmit}>
          <input
            id="guess-input"
            type="text"
            value={guess}
            placeholder="Type your guess..."
            onChange={onhandleChange}
            disabled={guessStatus === "correct"}
          />
          <button disabled={guessStatus === "correct"}>Check</button>
        </form>
        {guessStatus === "correct" && (
          <p className="feedback correct"> Correct!</p>
        )}
        {guessStatus === "incorrect" && (
          <p className="feedback incorrect"> Not quite, try again!</p>
        )}
      </div>
      <div className="nav">
        <button onClick={onPrev} disabled={isFirst}>
          Previous
        </button>
        <button onClick={onNext} disabled={isLast}>
          Next
        </button>
        <button onClick={shuffleArray}>Shuffle Cards</button>
      </div>
    </div>
  );
};

export default Cards;
