import { ButtonHTMLAttributes, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ className, ...props }: ButtonProps) => (
  <button
    className={twMerge(
      "flex items-center justify-center gap-2 rounded-xl  sm:rounded-3xl",
      "bg-purple p-4 text-headingS font-medium text-white shadow sm:p-8",
      className,
    )}
    {...props}
  />
);
