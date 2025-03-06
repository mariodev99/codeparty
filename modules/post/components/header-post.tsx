"use client";
import { Button } from "@/components/ui/button";
import supabaseClient from "@/utils/supabase/client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header({ userId }: { userId: string }) {
  const [profileData, setProfileData] = useState<any | null>(null);

  useEffect(() => {
    const getData = async () => {
      const { data, error } = await supabaseClient
        .from("profiles")
        .select("username, avatar, position")
        .eq("id", userId)
        .single();

      if (data) {
        setProfileData(data);
      }
    };

    getData();
  }, []);

  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex items-center gap-2">
        <div className="h-14 w-14 rounded-full bg-content-secondary relative overflow-hidden ">
          {profileData?.avatar && (
            <Image
              alt="avatar"
              src={profileData.avatar}
              fill
              objectFit="cover"
            />
          )}
        </div>
        <div>
          <p className="text-base md:text-xl font-medium">
            {profileData?.username}
          </p>
          <p className="text-sm md:text-lg">{profileData?.position}</p>
        </div>
      </div>
      <div className="flex sm:basis text-center">
        <Link
          // className="bg-border rounded-full px-4 py-2 font-medium text-xs sm:text-sm md:text-base text-center"
          href={`/profiles/${userId}`}
        >
          <Button variant={"secondary"}>View profile</Button>
        </Link>
      </div>
    </div>
  );
}
