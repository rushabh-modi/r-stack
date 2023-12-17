import { useSession } from "next-auth/react";

import { AvatarFallback, AvatarImage } from "../ui/avatar";

export default function UserDetails() {
  const { data: session } = useSession();

  return (
    <>
      <AvatarImage src={session?.user.image ?? "/avatar.png"} />
      <AvatarFallback className="rounded-sm">
        {session?.user.name ?? session?.user.username}
      </AvatarFallback>
    </>
  );
}
