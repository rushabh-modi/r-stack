export const metadata = {
  title: "Log In",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex justify-center rounded-md p-6">{children}</div>;
}
