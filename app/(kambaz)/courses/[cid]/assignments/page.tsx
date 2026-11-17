"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { FaPlus, FaSearch } from "react-icons/fa";
import AssignmentItem from "./AssignmentItem";
import * as client from "./client";

export default function Assignments() {
  const { cid } = useParams();
  const courseId = typeof cid === "string" ? cid : "";
  const [assignments, setAssignments] = useState<client.Assignment[]>([]);

  const fetchAssignments = useCallback(async () => {
    if (!courseId) return;
    try {
      setAssignments(await client.findAssignmentsForCourse(courseId));
    } catch {
      setAssignments([]);
    }
  }, [courseId]);

  useEffect(() => {
    fetchAssignments();
  }, [fetchAssignments]);

  const onDeleteAssignment = async (assignmentId: string) => {
    await client.deleteAssignment(assignmentId);
    setAssignments(assignments.filter((a) => a._id !== assignmentId));
  };

  return (
    <div id="wd-assignments">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <div className="relative">
          <FaSearch className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-neutral-400" />
          <input
            placeholder="Search for Assignments"
            id="wd-search-assignment"
            className="rounded border border-neutral-300 py-1.5 pr-3 pl-9 text-sm"
          />
        </div>
        <div className="flex gap-2">
          <button
            id="wd-add-assignment-group"
            type="button"
            className="inline-flex items-center gap-1 rounded border border-neutral-300 bg-neutral-100 px-3 py-1.5 text-sm"
          >
            <FaPlus /> Group
          </button>
          <Link
            id="wd-add-assignment"
            href={`/courses/${courseId}/assignments/new`}
            className="inline-flex items-center gap-1 rounded border border-red-600 bg-red-600 px-3 py-1.5 text-sm text-white no-underline"
          >
            <FaPlus /> Assignment
          </Link>
        </div>
      </div>

      <h3
        id="wd-assignments-title"
        className="mb-3 flex items-center justify-between rounded bg-neutral-100 px-3 py-2 text-base font-semibold"
      >
        <span>ASSIGNMENTS 40% of Total</span>
        <button
          type="button"
          className="rounded border border-neutral-300 bg-white px-2 py-1 text-sm"
        >
          <FaPlus />
        </button>
      </h3>
      <ul id="wd-assignment-list" className="m-0 list-none p-0">
        {assignments.map((assignment) => (
          <AssignmentItem
            key={assignment._id}
            cid={courseId}
            aid={assignment._id}
            title={assignment.title}
            details={`Multiple Modules | Not available until ${assignment.available} | Due ${assignment.due} | ${assignment.points} pts`}
            onDelete={() => onDeleteAssignment(assignment._id)}
          />
        ))}
      </ul>
    </div>
  );
}
