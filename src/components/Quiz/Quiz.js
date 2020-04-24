import React, { useState } from 'react';
import styles from './Quiz.module.scss';
import quizDataInitial from './assets/quiz-data';

import Start from './pages/Start/Start';
import Question from './pages/Question/Question';
import Result from './pages/Result/Result';

function Quiz() {
  const quizDataInitialFormatted = {
    ...quizDataInitial,
    questions: quizDataInitial.questions.map(question => ({
      ...question,
      isAnswered: false,
      alternatives: question.alternatives.map(alternative => ({
        ...alternative,
        isUserAnswer: false,
      })),
    })),
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [numCorrectAnswers, setNumCorrectAnswers] = useState(0);
  const [quizData, setQuizData] = useState(quizDataInitialFormatted);

  const currentUrl = window.location.href;

  const numTotalQuestions = quizData.questions.length;
  const numCurrentQuestion = currentPage - 1;

  const isStartPage = currentPage === 1;
  const isResultPage = currentPage === numTotalQuestions + 2;

  const currentQuestion = quizData.questions[currentPage - 2];

  const goToNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const onAnswerSelected = clickedAlternative => {
    const currentQuestionIndex = quizData.questions.findIndex(
      question => question.id === currentQuestion.id,
    );

    const alternativesCopy = [...currentQuestion.alternatives];

    const foundAlternative = alternativesCopy.find(
      alternative => alternative.id === clickedAlternative.id,
    );

    const updatedAlternative = {
      ...foundAlternative,
      isUserAnswer: true,
    };

    const alternativeIndex = alternativesCopy.findIndex(
      alternative => alternative.id === updatedAlternative.id,
    );

    alternativesCopy[alternativeIndex] = updatedAlternative;

    setQuizData({
      ...quizData,
      questions: [
        ...quizData.questions.slice(0, currentQuestionIndex),
        {
          ...currentQuestion,
          alternatives: alternativesCopy,
          isAnswered: true,
        },
        ...quizData.questions.slice(currentQuestionIndex + 1),
      ],
    });

    if (clickedAlternative.isCorrect) {
      setNumCorrectAnswers(numCorrectAnswers + 1);
    }

    setTimeout(() => {
      goToNextPage();
    }, 2500);
  };

  const restartQuiz = () => {
    setNumCorrectAnswers(0);
    setQuizData(quizDataInitialFormatted);
    setCurrentPage(1);
  };

  return (
    <div className={styles.quiz}>
      {isStartPage && (
        <div className={styles.page}>
          <Start
            description={quizData.description}
            img={quizData.img}
            onClickStart={goToNextPage}
            title={quizData.title}
          />
        </div>
      )}

      {!isStartPage && !isResultPage && (
        <div className={styles.page}>
          <Question
            numCurrentQuestion={numCurrentQuestion}
            numTotalQuestions={numTotalQuestions}
            onAnswerSelected={onAnswerSelected}
            question={currentQuestion}
            quizTitle={quizData.title}
          />
        </div>
      )}

      {isResultPage && (
        <div className={styles.page}>
          <Result
            quizTitle={quizData.title}
            currentUrl={currentUrl}
            numCorrectAnswers={numCorrectAnswers}
            numTotalQuestions={numTotalQuestions}
            results={quizData.results}
            onClickRestart={restartQuiz}
          />
        </div>
      )}
    </div>
  );
}

export default Quiz;
