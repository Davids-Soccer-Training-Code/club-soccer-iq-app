"use client";

import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

export function SignOutButton() {
  return (
    <button className="ghost-button" type="button" onClick={() => signOut({ callbackUrl: "/" })}>
      <LogOut aria-hidden="true" size={18} />
      Sign out
    </button>
  );
}
