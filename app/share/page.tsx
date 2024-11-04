"use client";
import Tab from "@/components/ui/tab";
import FormPost from "@/components/posts/form-post";
import { useState } from "react";

export default function Page() {
  const [showPublications, setShowPublications] = useState(true);

  return (
    <div className="w-full">
      <div className="flex flex-col items-center w-full">
        {/* <Tab
          setShowOption={setShowPublications}
          showOption={showPublications}
        /> */}

        {/* <div className={`${showPublications ? "flex w-full" : "hidden"}`}>
          <FormPost />
        </div> */}
        <div className={`${!showPublications ? "flex" : "hidden"}`}>storie</div>
      </div>
    </div>
  );
}
