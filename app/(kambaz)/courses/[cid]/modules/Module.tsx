"use client";

import type { ReactNode } from "react";
import ModuleControlButtons from "./ModuleControlButtons";
import type { CourseModule } from "../../../store/modulesStore";

export default function Module({
  module,
  onEdit,
  onChangeName,
  onUpdate,
  onRemove,
  children,
}: {
  module: CourseModule;
  onEdit: () => void;
  onChangeName: (name: string) => void;
  onUpdate: (module: CourseModule) => void;
  onRemove: () => void;
  children?: ReactNode;
}) {
  return (
    <li className="wd-module mb-5 overflow-hidden border border-neutral-300">
      <div className="wd-title flex items-center justify-between bg-neutral-100 p-3 font-semibold">
        {module.editing ? (
          <input
            className="w-1/2 rounded border border-neutral-300 px-2 py-1 text-base"
            value={module.name}
            onChange={(e) => onChangeName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                onUpdate({ ...module, editing: false });
              }
            }}
          />
        ) : (
          <span>{module.name}</span>
        )}
        <ModuleControlButtons onEdit={onEdit} onRemove={onRemove} />
      </div>
      <ul className="wd-lessons m-0 list-none p-0">{children}</ul>
    </li>
  );
}
