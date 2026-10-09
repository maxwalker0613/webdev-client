import Link from "next/link";

const input =
  "w-full rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm";
const fieldLabel = "mb-1 block text-sm text-neutral-700";
const boxLabel = "mb-1 block text-sm font-semibold";
const row = "mb-4 md:grid md:grid-cols-[180px_1fr] md:gap-4";
const rowLabel =
  "mb-1 block text-sm text-neutral-700 md:mb-0 md:pt-2 md:text-right";
const box = "rounded border border-neutral-300 p-3";

const entryOptions = [
  { id: "wd-text-entry", label: "Text Entry", checked: false },
  { id: "wd-website-url", label: "Website URL", checked: true },
  { id: "wd-media-recordings", label: "Media Recordings", checked: false },
  { id: "wd-student-annotation", label: "Student Annotation", checked: false },
  { id: "wd-file-upload", label: "File Upload", checked: false },
];

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  const { cid } = await params;
  return (
    <div id="wd-assignments-editor" className="max-w-3xl">
      <label htmlFor="wd-name" className={fieldLabel}>
        Assignment Name
      </label>
      <input
        id="wd-name"
        defaultValue="A1 - ENV + HTML"
        className={`${input} mb-4`}
      />
      <textarea
        id="wd-description"
        rows={6}
        defaultValue="The assignment is available online. Submit a link to the landing page of your web application."
        className={`${input} mb-4`}
      />

      <div className={row}>
        <label htmlFor="wd-points" className={rowLabel}>
          Points
        </label>
        <input id="wd-points" defaultValue={100} className={input} />
      </div>

      <div className={row}>
        <label htmlFor="wd-group" className={rowLabel}>
          Assignment Group
        </label>
        <select id="wd-group" defaultValue="ASSIGNMENTS" className={input}>
          <option value="ASSIGNMENTS">ASSIGNMENTS</option>
          <option value="QUIZZES">QUIZZES</option>
          <option value="EXAMS">EXAMS</option>
          <option value="PROJECT">PROJECT</option>
        </select>
      </div>

      <div className={row}>
        <label htmlFor="wd-display-grade-as" className={rowLabel}>
          Display Grade as
        </label>
        <select
          id="wd-display-grade-as"
          defaultValue="PERCENTAGE"
          className={input}
        >
          <option value="PERCENTAGE">Percentage</option>
          <option value="POINTS">Points</option>
          <option value="LETTER">Letter</option>
        </select>
      </div>

      <div className={row}>
        <label htmlFor="wd-submission-type" className={rowLabel}>
          Submission Type
        </label>
        <div className={box}>
          <select
            id="wd-submission-type"
            defaultValue="ONLINE"
            className={`${input} mb-3`}
          >
            <option value="ONLINE">Online</option>
            <option value="ON PAPER">On Paper</option>
          </select>
          <div className="mb-2 text-sm font-semibold">Online Entry Options</div>
          {entryOptions.map((option) => (
            <div
              key={option.id}
              className="mb-2 flex items-center gap-2 text-sm"
            >
              <input
                type="checkbox"
                id={option.id}
                defaultChecked={option.checked}
              />
              <label htmlFor={option.id}>{option.label}</label>
            </div>
          ))}
        </div>
      </div>

      <div className={row}>
        <span className={rowLabel}>Assign</span>
        <div className={box}>
          <label htmlFor="wd-assign-to" className={boxLabel}>
            Assign to
          </label>
          <input
            id="wd-assign-to"
            defaultValue="Everyone"
            className={`${input} mb-3`}
          />
          <label htmlFor="wd-due-date" className={boxLabel}>
            Due
          </label>
          <input
            id="wd-due-date"
            type="date"
            defaultValue="2024-05-13"
            className={`${input} mb-3`}
          />
          <div className="flex gap-3">
            <div className="min-w-0 flex-1">
              <label htmlFor="wd-available-from" className={boxLabel}>
                Available from
              </label>
              <input
                id="wd-available-from"
                type="date"
                defaultValue="2024-05-06"
                className={input}
              />
            </div>
            <div className="min-w-0 flex-1">
              <label htmlFor="wd-available-until" className={boxLabel}>
                Until
              </label>
              <input
                id="wd-available-until"
                type="date"
                defaultValue="2024-05-20"
                className={input}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="wd-ai-editor-notes" className={fieldLabel}>
          Sample notes
        </label>
        <textarea id="wd-ai-editor-notes" rows={3} className={input} />
      </div>

      <hr className="my-4" />
      <div className="flex justify-end gap-2">
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-cancel"
          className="rounded border border-neutral-300 bg-neutral-100 px-4 py-1.5 text-sm text-neutral-900 no-underline"
        >
          Cancel
        </Link>
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-save"
          className="rounded border border-red-600 bg-red-600 px-4 py-1.5 text-sm text-white no-underline"
        >
          Save
        </Link>
      </div>
    </div>
  );
}
