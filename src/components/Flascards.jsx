const Flascards = ({ flashcards }) => {
  return (
    <>
      <h1>FlasCards</h1>
      <ul>
        {flashcards.map((flashCard) => {
          return (
            <li key={flashCard.id}>
              <h2>{flashCard.front}</h2>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Flascards;

