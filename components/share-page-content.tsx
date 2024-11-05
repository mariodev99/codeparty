"use client";

import { useState } from "react";
import Tab from "./ui/tab";
import FormPost from "./posts/form-post";
// import { Profile } from "@/types/profiles";

export default function ShareContent({ data }: { data: any }) {
  const [showPublications, setShowPublications] = useState(true);

  return (
    <div className="flex flex-col items-center w-full">
      <Tab setShowOption={setShowPublications} showOption={showPublications} />

      <div className={`${showPublications ? "flex w-full" : "hidden"}`}>
        <FormPost profile={data} />
      </div>
      <div className={`${!showPublications ? "flex" : "hidden"}`}>storie</div>
    </div>
  );
}
