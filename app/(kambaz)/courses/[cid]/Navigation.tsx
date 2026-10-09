"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CourseNavigation({ cid }: { cid: string }) {
  const pathname = usePathname() ?? "";
  const base = `/courses/${cid}`;
  const links = [
    { id: "wd-course-home-link", label: "Home", href: `${base}/home` },
    { id: "wd-course-modules-link", label: "Modules", href: `${base}/modules` },
    { id: "wd-course-piazza-link", label: "Piazza", href: `${base}/piazza` },
    { id: "wd-course-zoom-link", label: "Zoom", href: `${base}/zoom` },
    {
      id: "wd-course-assignments-link",
      label: "Assignments",
      href: `${base}/assignments`,
    },
    { id: "wd-course-quizzes-link", label: "Quizzes", href: `${base}/quizzes` },
    { id: "wd-course-grades-link", label: "Grades", href: `${base}/grades` },
    {
      id: "wd-course-people-link",
      label: "People",
      href: `${base}/people/table`,
    },
  ];
  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <div
      id="wd-courses-navigation"
      className="wd list-group rounded-none text-lg"
    >
      {links.map((link) => (
        <Link
          key={link.id}
          href={link.href}
          id={link.id}
          className={
            isActive(link.href)
              ? "list-group-item active border-0"
              : "list-group-item border-0 text-red-600"
          }
        >
          {link.label}
        </Link>
      ))}
      <Link
        href={`${base}/home`}
        id="wd-course-ai-link"
        className="list-group-item border-0 text-red-600"
      >
        Sample
      </Link>
    </div>
  );
}
