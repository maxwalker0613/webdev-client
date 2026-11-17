"use client";

import { FaPencilAlt, FaTrash } from "react-icons/fa";
import { BsPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";

export default function ModuleControlButtons({
  onEdit,
  onRemove,
}: {
  onEdit: () => void;
  onRemove: () => void;
}) {
  return (
    <div className="flex items-center gap-2">
      <FaPencilAlt
        className="wd-edit-module cursor-pointer text-blue-600"
        onClick={onEdit}
        title="Edit module"
        aria-label="Edit module"
      />
      <FaTrash
        className="wd-delete-module cursor-pointer text-red-600"
        onClick={onRemove}
        title="Delete module"
        aria-label="Delete module"
      />
      <GreenCheckmark />
      <BsPlus className="text-3xl" />
      <IoEllipsisVertical className="text-xl" />
    </div>
  );
}
