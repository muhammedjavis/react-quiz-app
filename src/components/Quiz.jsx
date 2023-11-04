import { useCallback, useState } from 'react';
import quizCompleteImg from '../assets/quiz-complete.png';
import QUESTIONS from '../questions.js';

import Question from './Question.jsx';

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;

  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectedAnswer = useCallback(function handleSelectedAnswer(
    selectedAnswer
  ) {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  },
  []);

  const handleSkipAnswer = useCallback(
    () => handleSelectedAnswer(null),
    [handleSelectedAnswer]
  );

  if (quizIsComplete) {
    return (
      <div id='summary'>
        <img src={quizCompleteImg} />
        <h2>Quiz Complete</h2>
      </div>
    );
  }

  return (
    <div id='quiz'>
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectedAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}
