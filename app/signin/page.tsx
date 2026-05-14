import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { SignInForm } from "@/components/sign-in-form";
import { authOptions } from "@/lib/auth/options";

export default async function SignInPage() {
  const session = await getServerSession(authOptions);

  if (session?.user?.id) {
    redirect("/onboarding/player");
  }

  return (
    <main className="page-shell centered-shell">
      <section className="auth-panel">
        <p className="eyebrow">Player login</p>
        <h1>Get a secure sign-in link</h1>
        <p>
          Enter the email used for this player. The first sign-in starts a short soccer IQ
          baseline before the learning modules open.
        </p>
        <SignInForm />
      </section>
    </main>
  );
}
