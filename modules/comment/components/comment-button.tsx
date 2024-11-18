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
    <div className="flex items-center gap-1 text-content-secondary">
      <MessageSquare className="stroke-content-secondary" />
      <p className=" mt-1">{commentsCount}</p>
    </div>
  );
}
