import { twMerge } from "tailwind-merge";

type ProgressBarProps = {
  progress: number;
  className?:
    | {
        container?: string;
        bar?: string;
      }
    | string;
};

export const ProgressBar = ({ progress, className }: ProgressBarProps) => {
  const container =
    typeof className === "string" ? className : className?.container;
  const bar = typeof className === "string" ? undefined : className?.bar;
  return (
    <div
      className={twMerge(
        "flex h-4 w-full flex-col items-start justify-center gap-2 rounded-full bg-white p-1 dark:bg-navy",
        container,
      )}
    >
      <div
        className={twMerge("h-2 rounded-full bg-purple", bar)}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};
