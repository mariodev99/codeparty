"use client";

import Tab from "@/components/ui/tab";
import { useState } from "react";

export default function ProfileContent() {
  const [showPublications, setShowPublications] = useState(true);
  return (
    <>
      <div className="">
        <Tab
          setShowOption={setShowPublications}
          showOption={showPublications}
        />
      </div>

      <div className={`${showPublications ? "flex" : "hidden"}`}>pubs</div>
      <div className={`${!showPublications ? "flex" : "hidden"}`}>store</div>
    </>
  );
}
