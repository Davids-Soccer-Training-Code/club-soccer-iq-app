"use client";

import { Mail } from "lucide-react";
import { signIn } from "next-auth/react";
import { useState } from "react";

export function SignInForm() {
  const [email, setEmail] = useState("");
  const [isSending, setIsSending] = useState(false);

  return (
    <form
      className="auth-form"
      onSubmit={async (event) => {
        event.preventDefault();
        setIsSending(true);
        await signIn("email", {
          email,
          callbackUrl: "/onboarding/player",
        });
        setIsSending(false);
      }}
    >
      <label htmlFor="email">Email</label>
      <div className="email-row">
        <Mail aria-hidden="true" size={20} />
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="parent@example.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </div>
      <button className="primary-button" type="submit" disabled={isSending}>
        {isSending ? "Sending link..." : "Send sign-in link"}
      </button>
    </form>
  );
}
