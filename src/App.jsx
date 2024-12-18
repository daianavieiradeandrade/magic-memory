import React, { useState } from 'react';
import './App.css'

const cardImages = [
  { "src": "/images/amber.png" },
  { "src": "/images/cover.png" },
  { "src": "/images/diluc.png" },
  { "src": "/images/jean.png" },
  { "src": "/images/kaeya.png" },
  { "src": "/images/lisa.png" },
  { "src": "/images/paimon.png" }
];


function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)

  const shuffleCards = () => {
    const shuffleCards = [...cardImages, ...cardImages]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random() }))

    setCards(shuffleCards)
    setTurns(0)
  }

  console.log(cards, turns)

  return (
    <div className='App'>
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}> New game</button>
    </div>
  );
}

export default App
