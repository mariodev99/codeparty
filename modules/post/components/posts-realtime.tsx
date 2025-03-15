"use client";

import supabaseClient from "@/utils/supabase/client";
import { useEffect, useState } from "react";
import PostList from "./post-list";
import PostCard from "./post-card";
import { Post } from "@/modules/post/types";

export default function RealtimePosts({
  serverPosts,
  userId,
}: {
  serverPosts: any;
  userId: string;
}) {
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

  console.log("se renderizo la list");

  return (
    <PostList>
      {posts.map((post: Post) => (
        <PostCard key={post.id} {...post} userId={userId}></PostCard>
      ))}
    </PostList>
  );
}
