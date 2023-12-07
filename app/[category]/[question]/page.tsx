import { Button } from "@/components/Button";
import { ProgressBar } from "@/components/ProgressBar";
import { SelectionElement } from "@/components/SelectionElement";
import { NextQuestionButton } from "@/components/NextQuestionButton";

import { quizzes } from "@/data/quizzes";
import { notFound } from "next/navigation";
import { SubmitButton } from "@/components/SubmitButton";

const options = ["A", "B", "C", "D"] as const;

export default function Page({
  params: { category, question },
  searchParams: { question: answer },
}: {
  params: { category: string; question: string };
  searchParams: { question: "A" | "B" | "C" | "D" | undefined };
}) {
  const questionNumber = parseInt(question);
  if (isNaN(questionNumber)) return notFound();
  const quiz = quizzes.find((quiz) => quiz.title === category);
  if (!quiz) return notFound();

  const allQuestions = quiz.questions.length;
  const isLastQuestion = questionNumber === allQuestions;
  if (questionNumber > allQuestions) return notFound();
  const questionData = quiz.questions[questionNumber - 1];

  const correctOption = questionData.options.reduce(
    (acc, option, index) => {
      if (option === questionData.answer) {
        return options[index];
      }
      return acc;
    },
    "A" as "A" | "B" | "C" | "D",
  );
  return (
    <>
      <div className="flex flex-col items-center gap-6 self-stretch">
        <div className="flex flex-col items-start gap-3 self-stretch">
          <span className=" text-[14px] italic leading-6 text-navy-gray">
            Question {questionNumber} of {allQuestions}
          </span>
          <h1 className="text-bodyS font-medium leading-5 ">
            {questionData.question}
          </h1>
        </div>
        <ProgressBar progress={(questionNumber * 100) / allQuestions} />
      </div>
      <form className="flex flex-col items-center gap-3 self-stretch">
        {questionData.options.map((option, index) => (
          <SelectionElement
            text={option}
            option={options[index]}
            key={option}
            id={option}
            answer={answer}
            isCorrectOption={option === questionData.answer}
          />
        ))}
        {answer ? (
          <NextQuestionButton
            hasAnsweredCorrectly={answer === correctOption}
            href={
              isLastQuestion
                ? `/${category}/results`
                : `/${category}/${questionNumber + 1}`
            }
            lastQuestion={isLastQuestion}
          />
        ) : (
          <SubmitButton />
        )}
      </form>
    </>
  );
}
