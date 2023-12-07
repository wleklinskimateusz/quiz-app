"use client";

import { useCategory } from "@/hooks/useCategory";
import { quizzes } from "@/data/quizzes";
import { useScore } from "@/hooks/useScore";

export const Results = () => {
  const { getScore } = useScore();
  const score = getScore();
  const category = useCategory();
  const amount = quizzes.find((quiz) => quiz.title === category)?.questions
    .length;
  return (
    <>
      <span className="text-[88px] font-medium leading-[100%] text-navy-dark dark:text-white">
        {score}
      </span>
      <span className=" text-[18px] font-normal text-navy-gray dark:text-light-bluish">
        out of {amount}
      </span>
    </>
  );
};
