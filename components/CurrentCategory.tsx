"use client";

import { Icon } from "./icons/Icon";
import { useCategory } from "@/hooks/useCategory";

export const CurrentCategory = () => {
  const category = useCategory();
  return (
    <div className="flex items-center gap-4">
      <Icon icon={category} />
      <span className="text-[18px] font-medium dark:text-white">
        {category}
      </span>
    </div>
  );
};
