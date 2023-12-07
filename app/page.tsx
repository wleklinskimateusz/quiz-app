import { Button } from "@/components/Button";
import { ModeToggle } from "@/components/ModeToggle";
import { ResetScoreLink } from "@/components/ResetScoreLink";
import { SelectionElement } from "@/components/SelectionElement";
import { Icon } from "@/components/icons/Icon";
import { categories } from "@/data/cateogries";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-start gap-4 self-stretch">
        <h1 className="flex flex-col items-start gap-2 text-[40px] text-navy-dark dark:text-white">
          <span className="font-light">Welcome to the</span>
          <span className="font-medium">Frontend Quiz</span>
        </h1>
        <p className="text-[14px] font-normal italic leading-6 text-light-bluish">
          Pick a subject to get started.
        </p>
      </div>
      <div className="flex flex-col items-start gap-3 self-stretch">
        {categories.map((category) => (
          <ResetScoreLink
            href={`/${category}/1`}
            key={category}
            className="flex w-full items-center gap-4 rounded-xl bg-white p-3 shadow dark:bg-navy"
          >
            <Icon icon={category} />
            <span className="text-[18px font-medium]">{category}</span>
          </ResetScoreLink>
        ))}
      </div>
    </>
  );
}
