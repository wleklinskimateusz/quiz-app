export const categories = [
  "HTML",
  "CSS",
  "JavaScript",
  "Accessibility",
] as const;
export type Category = (typeof categories)[number];
