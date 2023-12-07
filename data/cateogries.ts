import { quizzes } from "./quizzes";

export const categories = quizzes.map((quiz) => quiz.title);
export type Category = (typeof categories)[number];
