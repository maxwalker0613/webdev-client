"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { useModulesStore } from "../../../store/modulesStore";

export default function ModuleEditor() {
  const { cid } = useParams();
  const [show, setShow] = useState(false);
  const [moduleName, setModuleName] = useState("");
  const addModule = useModulesStore((state) => state.addModule);

  const submit = () => {
    if (moduleName.trim() !== "") {
      addModule({ name: moduleName, course: String(cid) });
    }
    setModuleName("");
    setShow(false);
  };

  return (
    <>
      <button
        type="button"
        id="wd-add-module-btn"
        className="rounded border border-red-600 bg-red-600 px-3 py-1.5 text-sm text-white"
        onClick={() => setShow(true)}
      >
        + Module
      </button>
      {show && (
        <div
          id="wd-add-module-dialog"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
        >
          <div className="w-full max-w-md rounded-lg bg-white shadow-lg">
            <div className="flex items-center justify-between border-b border-neutral-200 px-4 py-3">
              <h3 className="m-0 text-lg font-semibold">Add Module</h3>
              <button
                type="button"
                onClick={() => setShow(false)}
                className="text-2xl leading-none text-neutral-500"
                aria-label="Close"
              >
                ×
              </button>
            </div>
            <div className="px-4 py-3">
              <input
                id="wd-add-module-name"
                className="w-full rounded border border-neutral-300 px-3 py-1.5"
                value={moduleName}
                onChange={(e) => setModuleName(e.target.value)}
                placeholder="Module name"
              />
            </div>
            <div className="flex justify-end gap-2 border-t border-neutral-200 px-4 py-3">
              <button
                type="button"
                id="wd-add-module-cancel"
                className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm"
                onClick={() => setShow(false)}
              >
                Cancel
              </button>
              <button
                type="button"
                id="wd-add-module-submit"
                className="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
                onClick={submit}
              >
                Add Module
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
