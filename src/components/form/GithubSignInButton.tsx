import { signIn } from "next-auth/react";

import { Button } from "../ui/button";
import { env } from "@/env";

export default function GithubSignInButton({
  children,
}: {
  children: React.ReactNode;
}) {
  const loginWithGithub = () =>
    signIn("github", { callbackUrl: `${env.NEXT_PUBLIC_APP_URL}/dashboard` });

  return (
    <Button onClick={loginWithGithub} className="w-full">
      {children}
    </Button>
  );
}
