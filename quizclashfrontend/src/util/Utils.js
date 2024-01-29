export function formatQuestions(apiQuestions) {
  return apiQuestions.map((question) => ({
    id: question?.id,
    quiz: question?.quiz,
    numb: question?.number,
    question: question?.question,
    answer: question?.answer,
    options: [
      question?.option1,
      question?.option2,
      question?.option3,
      question?.option4,
    ],
  }));
}
