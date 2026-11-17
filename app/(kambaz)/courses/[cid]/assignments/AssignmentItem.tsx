"use client";

import Link from "next/link";
import { FaFileAlt, FaTrash } from "react-icons/fa";

export default function AssignmentItem({
  cid,
  aid,
  title,
  details,
  onDelete,
}: {
  cid: string;
  aid: string;
  title: string;
  details: string;
  onDelete: () => void;
}) {
  return (
    <li className="wd-assignment-list-item mb-3 flex gap-3 border border-neutral-300 border-l-[3px] border-l-green-600 p-3">
      <FaFileAlt className="mt-1 shrink-0 text-xl text-green-700" />
      <div className="min-w-0 flex-1">
        <Link
          href={`/courses/${cid}/assignments/${aid}`}
          className="wd-assignment-link font-semibold text-neutral-900 no-underline hover:underline"
        >
          {title}
        </Link>
        <div className="mt-1 text-sm text-neutral-600">{details}</div>
      </div>
      <FaTrash
        className="wd-delete-assignment mt-1 shrink-0 cursor-pointer text-red-600"
        onClick={onDelete}
        title="Delete assignment"
        aria-label="Delete assignment"
      />
    </li>
  );
}
