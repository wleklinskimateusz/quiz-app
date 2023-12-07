import { ModeToggle } from "./ModeToggle";

import { CurrentCategory } from "./CurrentCategory";

export const TopBar = () => {
  return (
    <header className="flex h-[72px] items-center justify-between self-stretch px-6 py-4">
      <CurrentCategory />
      <ModeToggle />
    </header>
  );
};
