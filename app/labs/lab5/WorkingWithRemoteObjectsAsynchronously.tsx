"use client";

import { useEffect, useState } from "react";
import * as client from "./client";

type Assignment = {
  id: number;
  title: string;
  description: string;
  due: string;
  completed: boolean;
  score: number;
};

const inputClass = "rounded border border-gray-300 px-2 py-1";

export default function WorkingWithRemoteObjectsAsynchronously() {
  const [assignment, setAssignment] = useState<Partial<Assignment>>({});

  const updateTitle = async () => {
    if (!assignment.title) return;
    setAssignment(await client.updateTitle(assignment.title));
  };

  useEffect(() => {
    const fetchAssignment = async () => {
      setAssignment(await client.fetchAssignment());
    };
    fetchAssignment();
  }, []);

  return (
    <div id="wd-working-with-objects-async">
      <h3>Working with Objects Asynchronously</h3>
      <h4>Assignment</h4>
      <div className="flex flex-col gap-2">
        <input
          id="wd-async-assignment-title"
          className={inputClass}
          value={assignment.title ?? ""}
          onChange={(e) =>
            setAssignment({ ...assignment, title: e.target.value })
          }
        />
        <textarea
          id="wd-async-assignment-description"
          className={inputClass}
          value={assignment.description ?? ""}
          onChange={(e) =>
            setAssignment({ ...assignment, description: e.target.value })
          }
        />
        <input
          id="wd-async-assignment-due"
          type="date"
          className={inputClass}
          value={assignment.due ?? ""}
          onChange={(e) =>
            setAssignment({ ...assignment, due: e.target.value })
          }
        />
        <label className="flex items-center gap-1">
          <input
            id="wd-async-assignment-completed"
            type="checkbox"
            checked={assignment.completed ?? false}
            onChange={(e) =>
              setAssignment({ ...assignment, completed: e.target.checked })
            }
          />
          Completed
        </label>
        <div>
          <button
            id="wd-async-update-title"
            type="button"
            className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
            onClick={updateTitle}
          >
            Update Title
          </button>
        </div>
      </div>
      <pre className="mt-2">{JSON.stringify(assignment, null, 2)}</pre>
    </div>
  );
}
