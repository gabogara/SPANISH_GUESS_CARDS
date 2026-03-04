
const Flascards = ({ card, onNext, onPrev , index, total }) => {
  return (
    <>
      <div>
        <h1>FlasCards</h1>
        <h3>
          {index + 1} / {total}
        </h3>
        <p>{card.front}</p>
        {/* <p>{card.category}</p> */}
      </div>
      <div>
        <button onClick={onPrev}> Previous</button>
        <button onClick={onNext}>Next</button>
      </div>
    </>
  );
};

export default Flascards;
