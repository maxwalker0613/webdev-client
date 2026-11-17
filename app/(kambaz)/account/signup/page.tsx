"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAccountContext } from "../AccountContext";
import * as client from "../client";

const field = "mb-2 w-full rounded border border-neutral-300 px-3 py-2";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { setCurrentUser } = useAccountContext();
  const router = useRouter();

  const signup = async () => {
    if (!username || !password || password !== verifyPassword) return;
    try {
      const current = await client.signup({
        username,
        password,
        firstName: "",
        lastName: "",
        email: "",
        role: "STUDENT",
        loginId: "",
        section: "",
        lastActivity: "",
        totalActivity: "",
      });
      setCurrentUser(current);
      router.push("/account/profile");
    } catch (error) {
      const e = error as { response?: { data?: { message?: string } } };
      setErrorMessage(e.response?.data?.message ?? "Unable to sign up");
    }
  };

  return (
    <div id="wd-signup-screen" className="max-w-sm">
      <h1 className="mb-3 text-2xl font-semibold">Sign up</h1>
      {errorMessage && (
        <p
          id="wd-signup-error"
          className="mb-2 rounded bg-red-100 px-3 py-2 text-red-800"
        >
          {errorMessage}
        </p>
      )}
      <input
        placeholder="username"
        id="wd-username"
        className={`wd-username ${field}`}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        placeholder="password"
        type="password"
        id="wd-password"
        className={`wd-password ${field}`}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        placeholder="verify password"
        type="password"
        className={`wd-password-verify ${field}`}
        value={verifyPassword}
        onChange={(e) => setVerifyPassword(e.target.value)}
      />
      <button
        type="button"
        onClick={signup}
        id="wd-signup-btn"
        className="mb-2 block w-full rounded bg-blue-600 px-3 py-2 text-center text-white"
      >
        Sign up
      </button>
      <Link href="/account/signin" id="wd-signin-link">
        Sign in
      </Link>
    </div>
  );
}
