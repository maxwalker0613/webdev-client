import Link from "next/link";

const field = "mb-2 w-full rounded border border-neutral-300 px-3 py-2";

export default function Signin() {
  return (
    <div id="wd-signin-screen" className="max-w-sm">
      <h1 className="mb-3 text-2xl font-semibold">Sign in</h1>
      <input
        placeholder="username"
        className={`wd-username ${field}`}
        defaultValue="ada"
      />
      <input
        placeholder="password"
        type="password"
        className={`wd-password ${field}`}
        defaultValue="123"
      />
      <input
        id="wd-ai-signin-note"
        placeholder="sample note"
        className={field}
      />
      <Link
        href="/dashboard"
        id="wd-signin-btn"
        className="mb-2 block w-full rounded bg-blue-600 px-3 py-2 text-center text-white no-underline"
      >
        Sign in
      </Link>
      <Link href="/account/signup" id="wd-signup-link">
        Sign up
      </Link>
    </div>
  );
}
