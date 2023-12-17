/* eslint-disable @typescript-eslint/no-unused-vars */
import { z } from "zod";
import { hash } from "bcrypt";

import { db } from "@/server/db";

const userSchema = z.object({
  username: z.string().min(1, "Username is required").max(100),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must have than 8 characters"),
});

export async function POST(req: Request) {
  try {
    const body: unknown = await req.json();
    const { username, email, password } = userSchema.parse(body);

    const emailExists = await db.user.findFirst({
      where: { email: email },
    });

    if (emailExists) {
      return Response.json(
        {
          user: null,
          message: "User with this email already exists",
        },
        { status: 409 },
      );
    }

    const usernameExists = await db.user.findFirst({
      where: { username: username },
    });
    if (usernameExists) {
      return Response.json(
        {
          user: null,
          message: "User with this username already exists",
        },
        { status: 409 },
      );
    }

    const hashedPassword = await hash(password, 10);
    const newUser = await db.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    const { password: newUserPassword, ...rest } = newUser;

    return Response.json(
      {
        user: rest,
        message: "User created Successfully",
      },
      { status: 201 },
    );
  } catch (error) {
    return Response.json(
      {
        message: "something went wrong",
      },
      {
        status: 500,
      },
    );
  }
}
