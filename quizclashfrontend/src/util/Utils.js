
export function formatQuestions(apiQuestions){
        return apiQuestions.map((question) => ({
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
    };