"use client";

import { memo, ReactNode } from "react";
type TabProps = {
  showOption: boolean;
  setShowOption: React.Dispatch<React.SetStateAction<boolean>>;
};

type TabBoxProps = {
  children: ReactNode;
  isActive: boolean;
  handleClick: () => void;
};

const TabBox = memo(({ children, isActive, handleClick }: TabBoxProps) => {
  return (
    <div
      className={`flex justify-center rounded-full p-2 px-12 cursor-pointer transition-colors duration-200 ${
        isActive ? "bg-background " : "bg-none text-content-secondary"
      }`}
      onClick={handleClick}
    >
      {children}
    </div>
  );
});

export default function Tab({ setShowOption, showOption }: TabProps) {
  return (
    <div className="grid grid-cols-2 gap-1 font-medium text-sm md:text-base bg-content-primary rounded-full p-1 text-center mt-6 mb-4 ">
      <TabBox handleClick={() => setShowOption(true)} isActive={showOption}>
        Posts
      </TabBox>
      <TabBox handleClick={() => setShowOption(false)} isActive={!showOption}>
        Stories
      </TabBox>
    </div>
  );
}

TabBox.displayName = "TabBox";
