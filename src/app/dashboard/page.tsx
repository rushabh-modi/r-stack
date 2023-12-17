import { getServerAuthSession } from "@/server/auth";

export const metadata = {
  title: "Dashboard",
};

export default async function DashboardPage() {
  const session = await getServerAuthSession();

  if (session?.user) {
    return (
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <h2>Welcome back, {session.user.name ?? session.user.username}</h2>
      </section>
    );
  }

  return <h2>Please login to see this Dashboard page</h2>;
}
