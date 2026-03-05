const Cards = ({
  card,
  flipped,
  onRandom,
  onNext,
  onPrev,
  onFlip,
  index,
  total,
}) => {
  const formatWord = (word) => {
    return word.replace("-", " ").replace(/^\w/, (c) => c.toUpperCase());
  };
  return (
    <div className="card-wrapper">
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
            <p>{card.front}</p>
          </div>

          <div className="face back">
            <p>{card.back}</p>
          </div>
        </div>
      </div>
      <div className="nav">
        <button onClick={onPrev}> Previous</button>
        <button onClick={onRandom}>Random</button>
        <button onClick={onNext}>Next</button>
      </div>
    </div>
  );
};

export default Cards;
