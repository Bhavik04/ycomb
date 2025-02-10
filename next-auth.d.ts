// next-auth.d.ts
import NextAuth from "next-auth";
import { DefaultSession } from "next-auth";
import { DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  /**
   * Extend the default session with an additional `id` property.
   */
  interface Session extends DefaultSession {
    id: string;
  }
}

declare module "next-auth/jwt" {
  /**
   * Extend the default JWT with an additional `id` property.
   */
  interface JWT extends DefaultJWT {
    id: string;
  }
}
