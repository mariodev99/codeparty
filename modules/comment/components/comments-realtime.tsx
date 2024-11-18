"use client";

import supabaseClient from "@/utils/supabase/client";
import { useEffect, useState } from "react";
import { Comment } from "../types";
import CommentCard from "./comment-card";

export default function RealtimeComments({
  serverComments,
}: {
  serverComments: any;
}) {
  const [comments, setComments] = useState(serverComments);

  useEffect(() => {
    setComments(serverComments);
  }, [serverComments]);

  useEffect(() => {
    const channel = supabaseClient
      .channel("*")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "comments" },
        (payload) => setComments((comments: any) => [...comments, payload.new])
      )
      .subscribe();

    return () => {
      supabaseClient.removeChannel(channel);
    };
  }, [serverComments]);

  return (
    <div className="grid gap-2 mt-4 ">
      <p className="text-content-secondary text-center">
        {comments.length > 1 ? "Comments" : "Be the first to comment"}
      </p>
      {comments.map((comment: Comment) => (
        <CommentCard key={comment.comment_id} {...comment} />
      ))}
    </div>
  );
}
