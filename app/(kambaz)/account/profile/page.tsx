"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAccountContext, type User } from "../AccountContext";

const field = "mb-2 w-full rounded border border-neutral-300 px-3 py-2";

type ProfileData = User & { dob?: string };

export default function Profile() {
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const { currentUser, setCurrentUser } = useAccountContext();
  const router = useRouter();

  useEffect(() => {
    if (!currentUser) {
      router.push("/account/signin");
      return;
    }
    setProfile({ dob: "2000-01-01", ...currentUser });
  }, [currentUser, router]);

  const signout = () => {
    setCurrentUser(null);
    router.push("/account/signin");
  };

  if (!currentUser || !profile) return null;

  return (
    <div id="wd-profile-screen" className="max-w-md">
      <h1 className="mb-3 text-2xl font-semibold">Profile</h1>
      <input
        value={profile.username}
        placeholder="username"
        id="wd-username"
        className={`wd-username ${field}`}
        onChange={(e) => setProfile({ ...profile, username: e.target.value })}
      />
      <input
        value={profile.password}
        placeholder="password"
        type="password"
        id="wd-password"
        className={`wd-password ${field}`}
        onChange={(e) => setProfile({ ...profile, password: e.target.value })}
      />
      <input
        value={profile.firstName}
        placeholder="First Name"
        id="wd-firstname"
        className={field}
        onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
      />
      <input
        value={profile.lastName}
        placeholder="Last Name"
        id="wd-lastname"
        className={field}
        onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
      />
      <input
        value={profile.dob ?? ""}
        type="date"
        id="wd-dob"
        className={field}
        onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
      />
      <input
        value={profile.email}
        type="email"
        id="wd-email"
        className={field}
        onChange={(e) => setProfile({ ...profile, email: e.target.value })}
      />
      <select
        value={profile.role}
        id="wd-role"
        className={field}
        onChange={(e) => setProfile({ ...profile, role: e.target.value })}
      >
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>
      <button
        type="button"
        onClick={signout}
        id="wd-signout-btn"
        className="mb-2 block w-full rounded bg-red-600 px-3 py-2 text-center text-white"
      >
        Signout
      </button>
    </div>
  );
}
