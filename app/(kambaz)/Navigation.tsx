"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaRegCircleUser, FaRegCalendarDays } from "react-icons/fa6";
import { FaInbox, FaBook, FaFlask, FaCircleQuestion } from "react-icons/fa6";
import Image from "next/image";

const tileBase = "block py-3 text-center text-sm no-underline";
const idle = `${tileBase} bg-black text-white`;
const active = `${tileBase} bg-white text-red-600`;

const LINKS = [
  {
    label: "Dashboard",
    path: "/dashboard",
    id: "wd-dashboard-link",
    icon: AiOutlineDashboard,
    match: (p: string) => p.startsWith("/dashboard"),
  },
  {
    label: "Courses",
    path: "/dashboard",
    id: "wd-course-link",
    icon: FaBook,
    match: (p: string) => p.startsWith("/courses"),
  },
  {
    label: "Calendar",
    path: "/calendar",
    id: "wd-calendar-link",
    icon: FaRegCalendarDays,
    match: (p: string) => p.startsWith("/calendar"),
  },
  {
    label: "Inbox",
    path: "/inbox",
    id: "wd-inbox-link",
    icon: FaInbox,
    match: (p: string) => p.startsWith("/inbox"),
  },
  {
    label: "Labs",
    path: "/labs",
    id: "wd-labs-link",
    icon: FaFlask,
    match: (p: string) => p.startsWith("/labs"),
  },
  {
    label: "History",
    path: "/history",
    id: "wd-history-link",
    icon: FaRegCalendarDays,
    match: (p: string) => p.startsWith("/history"),
  },
  {
    label: "Help",
    path: "/labs",
    id: "wd-ai-nav-help",
    icon: FaCircleQuestion,
    match: () => false,
  },
];

export default function KambazNavigation() {
  const pathname = usePathname() ?? "";
  const onAccount = pathname.startsWith("/account");

  return (
    <nav
      id="wd-kambaz-navigation"
      className="fixed bottom-0 top-0 z-20 hidden w-[120px] bg-black md:block"
    >
      <a
        href="https://www.northeastern.edu/"
        id="wd-neu-link"
        target="_blank"
        rel="noreferrer"
        className="block bg-black py-3 text-center"
      >
        <Image
          src="/images/NEU.png"
          alt="Northeastern"
          width={64}
          height={64}
          className="mx-auto rounded-full"
        />
      </a>
      <Link
        href="/account"
        id="wd-account-link"
        className={onAccount ? active : idle}
      >
        <FaRegCircleUser
          className={`inline-block text-3xl ${
            onAccount ? "text-red-600" : "text-white"
          }`}
        />
        <br />
        Account
      </Link>
      {LINKS.map((link) => {
        const Icon = link.icon;
        return (
          <Link
            key={link.label}
            href={link.path}
            id={link.id}
            className={link.match(pathname) ? active : idle}
          >
            <Icon className="inline-block text-3xl text-red-600" />
            <br />
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
