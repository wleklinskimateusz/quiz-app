import { categories } from "@/data/cateogries";
import { usePathname } from "next/navigation";

export function useCategory() {
  const pathname = usePathname();
  const chosenCategory = categories.find((category) =>
    pathname.toLowerCase().includes(category.toLowerCase()),
  );
  return chosenCategory;
}
