import { redirect } from "next/navigation";

import SignInForm from "@/components/form/SignInForm";
import { getServerAuthSession } from "@/server/auth";

export default async function SignInPage() {
  const session = await getServerAuthSession();
  if (session) {
    redirect("/");
  }

  return (
    <div className="max-w-xs">
      <SignInForm />
    </div>
  );
}
