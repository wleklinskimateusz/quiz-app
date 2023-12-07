"use client";

import { useScore } from "@/hooks/useScore";
import Link from "next/link";
import { ComponentProps } from "react";

export const ResetScoreLink = (props: ComponentProps<typeof Link>) => {
  const { resetScore } = useScore();
  return <Link onClick={resetScore} {...props} />;
};
