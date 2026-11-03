"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAccountContext } from "./AccountContext";

const allLinks = [
  { id: "wd-account-signin-link", label: "Signin", href: "/account" },
  { id: "wd-account-signup-link", label: "Signup", href: "/account/signup" },
  { id: "wd-account-profile-link", label: "Profile", href: "/account/profile" },
];

export default function AccountNavigation() {
  const pathname = usePathname() ?? "";
  const { currentUser } = useAccountContext();
  const links = allLinks.filter((link) =>
    currentUser
      ? link.id === "wd-account-profile-link"
      : link.id !== "wd-account-profile-link",
  );
  return (
    <div
      id="wd-account-navigation"
      className="wd list-group rounded-none text-lg"
    >
      {links.map((link) => (
        <Link
          key={link.id}
          href={link.href}
          id={link.id}
          className={
            pathname === link.href
              ? "list-group-item active border-0"
              : "list-group-item border-0 text-red-600"
          }
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
