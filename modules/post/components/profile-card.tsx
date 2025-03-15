import Image from "next/image";
import { useRouter } from "next/navigation";

function ProfileCard({
  user,
  user_id,
}: {
  user: { username: string; avatar: string; position: string; user_id: string };
  user_id: string;
}) {
  const router = useRouter();

  return (
    <div
      className="flex gap-2 cursor-pointer"
      onClick={(event) => {
        event.preventDefault();
        router.push(`/profiles/${user_id}`);
      }}
    >
      {/* Avatar */}
      <div className="h-9 md:h-11 w-9 md:w-11 rounded-full bg-content-secondary relative overflow-hidden">
        {user.avatar && (
          <Image alt="avatar" src={user.avatar} fill objectFit="cover" />
        )}
      </div>
      {/* Username */}
      <div>
        <div className="text-foreground font-medium">{user.username}</div>
        <div className="text-content-secondary text-[10px] md:text-xs leading-4 md:leading-5 font-regular">
          {user.position}
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
