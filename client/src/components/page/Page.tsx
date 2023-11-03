import { type ReactNode } from "react";
import Navbar from "./Navbar";

const Page = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex gap-[100px] w-[calc(100vw - 220px)] h-[calc(100vh-100px)]">
      <div>
        <Navbar />
      </div>
      <div className="w-full">
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Page;
