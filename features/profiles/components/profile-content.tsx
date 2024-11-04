"use client";

import PostList from "@/components/posts/post-list";
import Tab from "../../../components/ui/tab";
import PostCard from "@/components/posts/post-card";
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
