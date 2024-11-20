import AvatarCard from "@/components/common/avatar-card";
import { UserPostData } from "@/modules/post/types";
import supabaseClient from "@/utils/supabase/client";
import { LoaderCircle } from "lucide-react";

import { useEffect, useState } from "react";

export default function SearchProfiles({ query }: { query: string }) {
  const [profiles, setProfiles] = useState<any | null>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const { data, error } = await supabaseClient
        .from("profiles")
        .select("username, avatar, position, id")
        .like("username", `%${query}%`);

      if (error) {
        console.error(error);
        setError(true);
      } else {
        setProfiles(data || []);
      }

      setLoading(false);
    };

    getData();
  }, [query]);

  return (
    <div className="mt-2">
      <p className="text-content-secondary ">Results for {query}</p>
      {loading ? (
        <div className="flex justify-center items-center h-16">
          <div className="animate-spin">
            <LoaderCircle />
          </div>
        </div>
      ) : profiles.length != 0 ? (
        <div className="grid gap-2 mt-4">
          {profiles.map((profile: UserPostData) => (
            <div
              className="border p-2 rounded-full hover:bg-content-primary"
              key={profile.id}
            >
              <AvatarCard {...profile} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-content-secondary">Not results</div>
      )}
    </div>
  );
}
