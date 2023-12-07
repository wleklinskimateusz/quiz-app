"use client";

import { Button } from "./Button";
import Link, { LinkProps } from "next/link";
import { useScore } from "@/hooks/useScore";

type SubmitQuestionButtonProps = {
  hasAnsweredCorrectly: boolean;
  href: LinkProps["href"];
  lastQuestion?: boolean;
};

export const NextQuestionButton = ({
  hasAnsweredCorrectly,
  href,
  lastQuestion,
}: SubmitQuestionButtonProps) => {
  const { addScore } = useScore();
  return (
    <Link
      href={href}
      onClick={() => {
        if (hasAnsweredCorrectly) {
          addScore();
        }
      }}
    >
      <Button>{lastQuestion ? "Show Results" : "Next Question"}</Button>
    </Link>
  );
};
