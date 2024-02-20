import React, { useState } from 'react';
import { questions } from '../../constants/questions.js';
import { answers } from '../../constants/asnwers.js';
import './index.css';


export default function Card() {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [cardStates, setCardStates] = useState(Array(30).fill(false));
  const columnTitles = ["Column 1", "Column 2", "Column 3"];

  const handleClick = (index) => {
    setCardStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });

    setSelectedQuestion(index);
    setShowAnswer(false); 
  };

  const toggleAnswer = (e) => {
    e.stopPropagation();
    setShowAnswer((prevShowAnswer) => !prevShowAnswer);
  };

  const closeModal = () => {
    setSelectedQuestion(null);
    setShowAnswer(false);
  };

  console.log(cardStates);

  return (
    <>
      <div className="card">
        {Array.from({ length: 3 }, (_, columnIndex) => (
          <div key={columnIndex} className="column">
            <h3>{columnTitles[columnIndex]}</h3>
            {Array.from({ length: 10 }, (_, cardIndex) => {
              const index = columnIndex * 10 + cardIndex;
              const isFlipped = cardStates[index];
              return (
                <div
                  key={index}
                  className={isFlipped ? 'container-card' : 'flipped-card'}
                  onClick={() => handleClick(index)}
                >
                  {isFlipped ? questions[index] : `Click to reveal Question ${index + 1}`}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {selectedQuestion !== null && (
        <div className='modal' onClick={closeModal}>
          <div className='modal-content'>
            <h2>Question {selectedQuestion + 1}</h2>
            <p>{questions[selectedQuestion]}</p>
            <button onClick={(e)=>{toggleAnswer(e)}}>{showAnswer ? 'Hide Answer' : 'Show Answer'}</button>
            {showAnswer && <p>Answer: {answers[selectedQuestion]}</p>}
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}
