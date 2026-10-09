"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { id: "wd-account-signin-link", label: "Signin", href: "/account/signin" },
  { id: "wd-account-signup-link", label: "Signup", href: "/account/signup" },
  { id: "wd-account-profile-link", label: "Profile", href: "/account/profile" },
];

export default function AccountNavigation() {
  const pathname = usePathname() ?? "";
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
