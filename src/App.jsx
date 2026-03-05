import { useState } from "react";
import Cards from "./components/Cards";

import "./App.css";

const flashcards = [
  {
    id: 1,
    front: "Apple",
    back: "Manzana",
    category: "Food",
    difficulty: "easy",
  },
  {
    id: 2,
    front: "Bread",
    back: "Pan",
    category: "Food",
    difficulty: "easy",
  },
  {
    id: 3,
    front: "Strawberry",
    back: "Fresa",
    category: "Food",
    difficulty: "medium",
  },
  {
    id: 4,
    front: "I’m hungry.",
    back: "Tengo hambre.",
    category: "Food",
    difficulty: "easy",
  },
  {
    id: 5,
    front: "Could I have the menu, please?",
    back: "¿Me puede traer el menú, por favor?",
    category: "Food",
    difficulty: "medium",
  },

  {
    id: 6,
    front: "Airport",
    back: "Aeropuerto",
    category: "Travel",
    difficulty: "easy",
  },
  {
    id: 7,
    front: "Ticket",
    back: "Boleto / billete",
    category: "Travel",
    difficulty: "easy",
  },
  {
    id: 8,
    front: "Where is the bathroom?",
    back: "¿Dónde está el baño?",
    category: "Travel",
    difficulty: "easy",
  },
  {
    id: 9,
    front: "I’m lost.",
    back: "Estoy perdido(a).",
    category: "Travel",
    difficulty: "easy",
  },
  {
    id: 10,
    front: "Could you show me on the map?",
    back: "¿Podrías mostrármelo en el mapa?",
    category: "Travel",
    difficulty: "medium",
  },
];

const App = () => {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const next = () => {
    setFlipped(false);
    setIndex((index) => (index + 1) % flashcards.length);
  };

  const prev = () => {
    setFlipped(false);
    setIndex((i) => (i - 1 + flashcards.length) % flashcards.length);
  };

  const flip = () => {
    setFlipped(!flipped);
  };

  return (
    <div className="page">
      <h1 className="main-title">FlashCards</h1>
      <Cards
        card={flashcards[index]}
        onNext={next}
        onPrev={prev}
        index={index}
        onFlip={flip}
        flipped={flipped}
        total={flashcards.length}
      />
    </div>
  );
};

export default App;
