import { useSession } from "next-auth/react";

export default function UserDetails() {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col space-y-1">
      <p className="text-sm font-medium leading-none">
        {session?.user.name ?? session?.user.username}
      </p>
      <p className="text-xs leading-none text-muted-foreground">
        {session?.user.email}
      </p>
    </div>
  );
}
