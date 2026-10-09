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

export default function KambazNavigation() {
  const pathname = usePathname() ?? "";
  const onDashboard = pathname.startsWith("/dashboard");
  const onCourses = pathname.startsWith("/courses");
  const onCalendar = pathname.startsWith("/calendar");
  const onInbox = pathname.startsWith("/inbox");
  const onLabs = pathname.startsWith("/labs");
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
      <Link
        href="/dashboard"
        id="wd-dashboard-link"
        className={onDashboard ? active : idle}
      >
        <AiOutlineDashboard className="inline-block text-3xl text-red-600" />
        <br />
        Dashboard
      </Link>
      <Link
        href="/dashboard"
        id="wd-course-link"
        className={onCourses ? active : idle}
      >
        <FaBook className="inline-block text-3xl text-red-600" />
        <br />
        Courses
      </Link>
      <Link
        href="/calendar"
        id="wd-calendar-link"
        className={onCalendar ? active : idle}
      >
        <FaRegCalendarDays className="inline-block text-3xl text-red-600" />
        <br />
        Calendar
      </Link>
      <Link
        href="/inbox"
        id="wd-inbox-link"
        className={onInbox ? active : idle}
      >
        <FaInbox className="inline-block text-3xl text-red-600" />
        <br />
        Inbox
      </Link>
      <Link href="/labs" id="wd-labs-link" className={onLabs ? active : idle}>
        <FaFlask className="inline-block text-3xl text-red-600" />
        <br />
        Labs
      </Link>
      <Link href="/labs" id="wd-ai-nav-help" className={idle}>
        <FaCircleQuestion className="inline-block text-3xl text-red-600" />
        <br />
        Help
      </Link>
    </nav>
  );
}
