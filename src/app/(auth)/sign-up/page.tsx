import { redirect } from "next/navigation";

import SignUpForm from "@/components/form/SignUpForm";
import { getServerAuthSession } from "@/server/auth";

export default async function SignUpPage() {
  const session = await getServerAuthSession();
  if (session) {
    redirect("/");
  }

  return (
    <div className="max-w-xs">
      <SignUpForm />
    </div>
  );
}
