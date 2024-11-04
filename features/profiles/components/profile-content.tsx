"use client";

import Tab from "../../../components/ui/tab";
import { useState } from "react";

export default function ProfileContent() {
  const [showPublications, setShowPublications] = useState(true);
  return (
    <>
      <div className="px-5">
        <Tab
          setShowOption={setShowPublications}
          showOption={showPublications}
        />
      </div>

      <div className={`${showPublications ? "flex" : "hidden"}`}>posts</div>
      <div className={`${!showPublications ? "flex" : "hidden"}`}>store</div>
    </>
  );
}
