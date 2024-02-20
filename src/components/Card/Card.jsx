import React, { useState } from 'react';
import './index.css';

const questions = ["Question 1", "Question 2", "Question 3","Question 4", "Question 5", "Question 6","Question 7", "Question 8", "Question 9","Question 10",
 "Question 11","Question 12", "Question 13","Question 14", "Question 15", "Question 16","Question 17","Question 18","Question 19","Question 20",
 "Question 21","Question 22", "Question 23","Question 24", "Question 25", "Question 26","Question 27","Question 28","Question 29","Question 30"];

export default function Card() {
  // const [cardStates, setCardStates] = useState([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [cardStates, setCardStates] = useState(Array(30).fill(false));
  const columnTitles = ["Column 1", "Column 2", "Column 3"];

  const handleClick = (index) => {
    setCardStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });

    setSelectedQuestion(index);
  };

  const closeModal = () => {
    setSelectedQuestion(null);
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
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}
