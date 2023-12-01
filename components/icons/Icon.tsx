import type { Category } from "@/data/cateogries";
import { AccessibilityIcon } from "./AccessibilityIcon";
import { CSSIcon } from "./CSSIcon";
import { HTMLIcon } from "./HTMLIcon";
import { JSICon } from "./JSIcon";

const Icons = {
  HTML: HTMLIcon,
  CSS: CSSIcon,
  JavaScript: JSICon,
  Accessibility: AccessibilityIcon,
} satisfies Record<Category, React.FC>;

export const Icon = ({ icon }: { icon?: Category }) => {
  if (!icon) return null;
  const DisplayIcon = Icons[icon];
  return <DisplayIcon />;
};
