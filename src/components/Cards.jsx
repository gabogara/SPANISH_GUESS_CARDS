const Flascards = ({ card, flipped, onNext, onPrev, onFlip, index, total }) => {
  return (
    <div className="card-wrapper">
      <p>Category: {card.category}</p>
      <p>Difficulty: {card.difficulty} </p>
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
        <span>
          {index + 1} / {total}
        </span>
        <button onClick={onNext}>Next</button>
      </div>
    </div>
  );
};

export default Flascards;
