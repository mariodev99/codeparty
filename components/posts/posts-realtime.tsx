"use client";

import supabaseClient from "@/utils/supabase/client";
import { useEffect, useState } from "react";
import PostList from "./post-list";
import PostCard from "./post-card";

export default function RealtimePosts({ serverPosts }: { serverPosts: any }) {
  const [posts, setPosts] = useState(serverPosts);

  useEffect(() => {
    setPosts(serverPosts);
  }, [serverPosts]);

  useEffect(() => {
    const channel = supabaseClient
      .channel("*")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "posts" },
        (payload) => setPosts((posts: any) => [...posts, payload.new])
      )
      .subscribe();

    return () => {
      supabaseClient.removeChannel(channel);
    };
  }, [serverPosts]);

  return (
    <PostList>
      {posts.map((post) => (
        <PostCard key={post.id} {...post}></PostCard>
      ))}
    </PostList>
  );
}
