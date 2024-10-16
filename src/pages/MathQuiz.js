import React from 'react';
import Quiz from '../components/Quiz';

const quizData = [
  {
    question: "What is 2 + 2?",
    options: [
      { text: "3", isCorrect: false },
      { text: "4", isCorrect: true },
      { text: "5", isCorrect: false },
    ],
  },
  {
    question: "What is the derivative of x^2?",
    options: [
      { text: "x", isCorrect: false },
      { text: "2x", isCorrect: true },
      { text: "x^2", isCorrect: false },
    ],
  },
];

const MathQuiz = () => <Quiz quizData={quizData} />;

export default MathQuiz;
