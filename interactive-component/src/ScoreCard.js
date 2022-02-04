import React, { useEffect, useState } from 'react';

export const ScoreCard = ({ id }) => {
  const [score, setScore] = useState(0);
  console.log();

  const decreaseScore = () => {};
  const increaseScore = () => {};
  return (
    <div className="card">
      <p>
        <button onClick={decreaseScore(id)}>-</button> <span>{score}</span>{' '}
        <button onClick={increaseScore(id)}>+</button>{' '}
      </p>
    </div>
  );
};
