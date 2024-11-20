import { UserPostData } from "@/modules/post/types";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function AvatarCard({
  avatar,
  username,
  position,
  id,
}: UserPostData) {
  const router = useRouter();

  const handleGoToProfile = () => {
    router.push(`/profiles/${id}`);
  };

  return (
    <div
      className="flex gap-2 cursor-pointer"
      onClick={(event) => {
        event.preventDefault();
        handleGoToProfile();
      }}
    >
      {/* avatar */}
      <div className="h-9 md:h-11 w-9 md:w-11 rounded-full bg-content-secondary relative overflow-hidden ">
        {avatar && <Image alt="avatar" src={avatar} fill objectFit="cover" />}
      </div>
      {/* username */}
      <div>
        <div className="text-foreground font-medium">{username}</div>
        <div className="text-content-secondary text-[10px] md:text-xs leading-4 md:leading-5 font-regular">
          {position}
        </div>
      </div>
    </div>
  );
}
