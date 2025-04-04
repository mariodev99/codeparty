"use client";

import supabaseClient from "@/utils/supabase/client";
import Tab from "@/components/ui/tab";
import { useEffect, useState } from "react";
import { Post } from "@/modules/post/types";
import { LoaderCircle } from "lucide-react";
import PostCard from "@/modules/post/components/post-card";
import PostList from "@/modules/post/components/post-list";

export default function ProfileContent({ userId }: { userId: string }) {
  const [showPublications, setShowPublications] = useState(true);
  const [posts, setPosts] = useState<any | null>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const { data, error } = await supabaseClient
        .from("posts")
        .select()
        .order("created_at", { ascending: false })
        .eq("user_id", userId);

      if (error) {
        console.error(error);
        setError(true);
      } else {
        setPosts(data || []);
      }

      setLoading(false);
    };

    getData();
  }, []);

  if (error) {
    return (
      <div className=" w-full text-xl text-center pt-10">
        Ups, ocurrio un error
      </div>
    );
  }

  return (
    <>
      <div className="">
        <Tab
          setShowOption={setShowPublications}
          showOption={showPublications}
        />
      </div>

      <div className={`${showPublications ? "block" : "hidden"}`}>
        {loading && (
          <div className="animate-spin w-full flex justify-center mt-10">
            <LoaderCircle className="stroke-primary" />
          </div>
        )}
        <PostList>
          {posts &&
            posts?.map((item: Post) => (
              <PostCard userId={userId} key={item.id} {...item} />
            ))}
        </PostList>

        {posts?.length === 0 && (
          <div className="text-center text-content-secondary">Feed empty</div>
        )}
      </div>
      <div className={`${!showPublications ? "block" : "hidden"}`}>
        <div className="text-center text-content-secondary">
          Stories soon...
        </div>
      </div>
    </>
  );
}
