import supabaseClient from "@/utils/supabase/client";
import { MessageSquare } from "lucide-react";
import { useEffect, useState } from "react";

export default function CommentButton({ postId }: { postId: string }) {
  const [commentsCount, setCommentsCount] = useState<number | null>(null);

  useEffect(() => {
    async function GetCommentsCount() {
      const { count, error } = await supabaseClient
        .from("comments")
        .select("*", { count: "exact", head: true })
        .eq("post_id", postId);

      setCommentsCount(count ? count : 0);
    }
    GetCommentsCount();
  }, []);

  return (
    <div className="flex items-center gap-1 text-content-secondary group">
      <MessageSquare className="stroke-content-secondary group-hover:stroke-foreground" />
      <p className=" mt-1 group-hover:text-foreground">{commentsCount}</p>
    </div>
  );
}
