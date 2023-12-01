import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = HTMLAttributes<HTMLButtonElement>;

export const Button = ({ className, ...props }: ButtonProps) => (
  <button
    className={twMerge(
      "flex items-center justify-center gap-2 rounded-3xl",
      "bg-purple p-8 text-headingS font-medium text-white shadow",
      className,
    )}
    {...props}
  />
);
