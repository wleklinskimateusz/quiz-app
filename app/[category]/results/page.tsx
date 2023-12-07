import { Button } from "@/components/Button";
import { CurrentCategory } from "@/components/CurrentCategory";
import { Results } from "@/components/Results";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="flex flex-col items-start gap-4 self-stretch">
        <h1 className="flex flex-col items-start gap-2 text-[40px] leading-10 text-navy-dark dark:text-white">
          <span className="font-light">Quiz completed</span>
          <span className="font-medium">You scored...</span>
        </h1>
      </div>
      <div className="flex flex-col items-center gap-4 rounded-xl bg-white p-8 shadow dark:bg-navy">
        <CurrentCategory />
        <div className="flex flex-col items-center gap-4">
          <Results />
        </div>
      </div>
      <Link href="/">
        <Button className="w-full">Play again</Button>
      </Link>
    </>
  );
}
