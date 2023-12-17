import { signIn } from "next-auth/react";

import { Button } from "../ui/button";
import { env } from "@/env";

export default function GoogleSignInButton({
  children,
}: {
  children: React.ReactNode;
}) {
  const loginWithGoogle = () =>
    signIn("google", { callbackUrl: `${env.NEXT_PUBLIC_APP_URL}/dashboard` });

  return (
    <Button onClick={loginWithGoogle} className="w-full">
      {children}
    </Button>
  );
}
