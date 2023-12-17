// Without role-based authentication

// export { default } from "next-auth/middleware";

// export const config = { matcher: ["/dashboard/:path*", "/admin"] };

// ----------------------*------------------------- //

// With Role-based authentication

//if user has not admin role and visit to admin-access role page & will be directed to home page
import { withAuth } from "next-auth/middleware";

export default withAuth({
  callbacks: {
    authorized: async ({ req, token }) => {
      if (req.nextUrl.pathname.startsWith("/admin"))
        return token?.role === "admin";
      return !!token;
    },
  },
});

// if user has not admin role and visit to admin page show denied page's content in subsequent page
// create a denied/page.tsx in what you want to show content to users without

// import { withAuth, type NextRequestWithAuth } from "next-auth/middleware";
// import { NextResponse } from "next/server";

// export default withAuth(
//   function middleware(req: NextRequestWithAuth) {
//     if (
//       req.nextUrl.pathname.startsWith("/admin") &&
//       req.nextauth.token?.role !== "admin"
//     ) {
//       return NextResponse.rewrite(new URL("/denied", req.url));
//     }
//     // if (
//     //   req.nextUrl.pathname.startsWith("/[path]") &&
//     //   req.nextauth.token?.role !== "[role]"
//     // ) {
//     //   return NextResponse.rewrite(new URL("/denied", req.url));
//     // }
//   },
//   {
//     callbacks: {
//       authorized: ({ token }) => !!token,
//     },
//   },
// );

export const config = { matcher: ["/dashboard/:path*", "/admin"] };
