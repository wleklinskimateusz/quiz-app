"use client";

import { usePathname } from "next/navigation";
import { ModeToggle } from "./ModeToggle";
import { categories } from "@/data/cateogries";
import { Icon } from "./icons/Icon";

export const TopBar = () => {
  const pathname = usePathname();
  const chosenCategory = categories.find((category) =>
    pathname.toLowerCase().includes(category.toLowerCase()),
  );

  return (
    <header className="flex h-[72px] items-center justify-between self-stretch px-6 py-4">
      <div className="flex items-center gap-4">
        <Icon icon={chosenCategory} />
        <span className="text-[18px] font-medium dark:text-white">
          {chosenCategory}
        </span>
      </div>
      <ModeToggle />
    </header>
  );
};
