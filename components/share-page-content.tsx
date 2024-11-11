"use client";

import { useState } from "react";
import Tab from "./ui/tab";
import FormPost from "./posts/form-post";
import { Profile } from "@/modules/profile/types";

export default function ShareContent({ data }: { data: Profile }) {
  const [showPublications, setShowPublications] = useState(true);

  return (
    <div className="">
      <div>
        <Tab
          setShowOption={setShowPublications}
          showOption={showPublications}
        />
      </div>

      <div className={`${showPublications ? "flex w-full" : "hidden"}`}>
        <FormPost profile={data} />
      </div>
      <div className={`${!showPublications ? "flex" : "hidden"}`}>Soon..</div>
    </div>
  );
}
