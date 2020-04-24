const quizData = {
  title: 'Quiz title',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  img: 'start-example.jpg',
  questions: [
    {
      id: 1,
      text: 'True or false?',
      alternatives: [
        {
          id: 1,
          text: 'True',
          isCorrect: true,
        },
        {
          id: 2,
          text: 'False',
          isCorrect: false,
        },
      ],
    },
    {
      id: 2,
      text: 'Yes or no?',
      alternatives: [
        {
          id: 1,
          text: 'Yes',
          isCorrect: true,
        },
        {
          id: 2,
          text: 'No',
          isCorrect: false,
        },
      ],
    },
    {
      id: 3,
      text: 'A, B, C or D?',
      img: 'question-example.jpg',
      alternatives: [
        {
          id: 1,
          text: 'A',
          isCorrect: false,
        },
        {
          id: 2,
          text: 'B',
          isCorrect: false,
        },
        {
          id: 3,
          text: 'C',
          isCorrect: true,
        },
        {
          id: 4,
          text: 'D',
          isCorrect: false,
        },
      ],
    },
    {
      id: 4,
      text: 'Lorem or Ipsum?',
      img: 'question-example.jpg',
      alternatives: [
        {
          id: 1,
          text: 'Lorem',
          isCorrect: false,
        },
        {
          id: 2,
          text: 'Ipsum',
          isCorrect: true,
        },
      ],
    },
  ],
  results: [
    {
      id: 1,
      range: {
        from: 0,
        to: 2,
      },
      title: 'You only got a few questions right.',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 2,
      range: {
        from: 3,
        to: 3,
      },
      title: 'You got more than half the quiz right!',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 3,
      range: {
        from: 4,
        to: 4,
      },
      title: 'Congratulations, you got everything right!',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      img: 'result-example.jpg',
    },
  ],
};

export default quizData;
