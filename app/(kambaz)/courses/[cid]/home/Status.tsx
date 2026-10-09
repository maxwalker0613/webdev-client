import {
  FaBell,
  FaBullhorn,
  FaBullseye,
  FaChartLine,
  FaCheckCircle,
  FaDownload,
  FaFileImport,
  FaListUl,
  FaStar,
} from "react-icons/fa";
import { MdDoNotDisturbAlt } from "react-icons/md";

const actionClass =
  "mb-1 flex w-full items-center rounded border border-neutral-300 bg-neutral-100 px-3 py-1.5 text-left text-sm";

export default function CourseStatus() {
  return (
    <div id="wd-course-status">
      <h2 className="mb-3 text-xl font-semibold">Course Status</h2>
      <div className="mb-3 flex gap-1">
        <button
          type="button"
          className="inline-flex min-w-0 flex-1 items-center justify-center rounded border border-neutral-300 bg-neutral-100 px-2 py-1.5 text-sm"
        >
          <MdDoNotDisturbAlt className="me-1 shrink-0 text-base" /> Unpublish
        </button>
        <button
          type="button"
          className="inline-flex min-w-0 flex-1 items-center justify-center rounded border border-green-600 bg-green-600 px-2 py-1.5 text-sm text-white"
        >
          <FaCheckCircle className="me-1 shrink-0 text-base" /> Publish
        </button>
      </div>
      <button type="button" className={actionClass}>
        <FaFileImport className="me-2 shrink-0" /> Import Existing Content
      </button>
      <button type="button" className={actionClass}>
        <FaDownload className="me-2 shrink-0" /> Import from Commons
      </button>
      <button type="button" className={actionClass}>
        <FaBullseye className="me-2 shrink-0" /> Choose Home Page
      </button>
      <button type="button" className={actionClass}>
        <FaListUl className="me-2 shrink-0" /> View Course Stream
      </button>
      <button type="button" className={actionClass}>
        <FaBullhorn className="me-2 shrink-0" /> New Announcement
      </button>
      <button type="button" className={actionClass}>
        <FaChartLine className="me-2 shrink-0" /> New Analytics
      </button>
      <button type="button" className={actionClass}>
        <FaBell className="me-2 shrink-0" /> View Course Notifications
      </button>
      <button id="wd-ai-status" type="button" className={actionClass}>
        <FaStar className="me-2 shrink-0" /> Sample action
      </button>
    </div>
  );
}
