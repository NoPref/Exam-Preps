import React, { useState } from 'react';
import styled from 'styled-components';

const QuizContainer = styled.div`
  background-color: var(--nav-bg-color);
  padding: 2em;
  border-radius: 10px;
  max-width: 600px;
  margin: 2em auto;
`;

const Question = styled.h2`
  font-size: 1.5em;
`;

const Option = styled.button`
  display: block;
  background-color: var(--accent1-color);
  color: var(--main-text-color);
  border: none;
  padding: 0.5em;
  margin: 0.5em 0;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  text-align: left;

  &:hover {
    background-color: var(--hover-bg-color);
  }
`;

const Quiz = ({ quizData }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore(score + 1);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  return (
    <QuizContainer>
      {showResult ? (
        <h3>Your score is {score} out of {quizData.length}</h3>
      ) : (
        <>
          <Question>{quizData[currentQuestion].question}</Question>
          {quizData[currentQuestion].options.map((option, index) => (
            <Option key={index} onClick={() => handleAnswer(option.isCorrect)}>
              {option.text}
            </Option>
          ))}
        </>
      )}
    </QuizContainer>
  );
};

export default Quiz;
