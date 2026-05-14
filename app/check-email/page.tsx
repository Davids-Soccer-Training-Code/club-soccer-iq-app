import Link from "next/link";
import { MailCheck } from "lucide-react";

export default function CheckEmailPage() {
  return (
    <main className="page-shell centered-shell">
      <section className="auth-panel success-panel">
        <MailCheck aria-hidden="true" size={42} />
        <p className="eyebrow">Check email</p>
        <h1>Your sign-in link is on the way.</h1>
        <p>
          Open the link from the parent email. In local development without SMTP, the link is
          printed in the terminal running `npm run dev`.
        </p>
        <Link className="secondary-link" href="/">
          Back home
        </Link>
      </section>
    </main>
  );
}
