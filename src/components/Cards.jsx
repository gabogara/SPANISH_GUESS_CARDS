const Flascards = ({
  card,
  flipped,
  onRandom,
  onNext,
  onPrev,
  onFlip,
  index,
  total,
}) => {
  return (
    <div className="card-wrapper">
      <p>Category: {card.category}</p>
      <p>Difficulty: {card.difficulty} </p>
      <span>
        {index + 1} / {total}
      </span>
      <div className="scene" onClick={onFlip}>
        <div className={`inner ${flipped ? "flipped" : ""}`}>
          <div className="face front">
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

export default Flascards;
