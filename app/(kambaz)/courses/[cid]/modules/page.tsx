"use client";

import { useCallback, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Module from "./Module";
import Lesson from "./Lesson";
import ModulesControls from "./ModulesControls";
import type { CourseModule } from "../../../store/modulesStore";
import * as client from "../../client";

export default function Modules() {
  const { cid } = useParams();
  const courseId = typeof cid === "string" ? cid : "";
  const [modules, setModules] = useState<CourseModule[]>([]);

  const fetchModules = useCallback(async () => {
    if (!courseId) return;
    try {
      setModules(await client.findModulesForCourse(courseId));
    } catch {
      setModules([]);
    }
  }, [courseId]);

  useEffect(() => {
    fetchModules();
  }, [fetchModules]);

  const onCreateModuleForCourse = async (name: string) => {
    const newModule = await client.createModuleForCourse(courseId, { name });
    setModules([...modules, newModule]);
  };
  const onRemoveModule = async (moduleId: string) => {
    await client.deleteModule(moduleId);
    setModules(modules.filter((m) => m._id !== moduleId));
  };
  const onEditModule = (moduleId: string) => {
    setModules(
      modules.map((m) => (m._id === moduleId ? { ...m, editing: true } : m)),
    );
  };
  const onChangeModuleName = (moduleId: string, name: string) => {
    setModules(modules.map((m) => (m._id === moduleId ? { ...m, name } : m)));
  };
  const onUpdateModule = async (module: CourseModule) => {
    const saved = { ...module, editing: undefined };
    await client.updateModule(saved);
    setModules(modules.map((m) => (m._id === saved._id ? saved : m)));
  };

  return (
    <div>
      <ModulesControls onAdd={onCreateModuleForCourse} />
      <ul id="wd-modules" className="m-0 list-none p-0">
        {modules.map((module) => (
          <Module
            key={module._id}
            module={module}
            onEdit={() => onEditModule(module._id)}
            onChangeName={(name) => onChangeModuleName(module._id, name)}
            onUpdate={onUpdateModule}
            onRemove={() => onRemoveModule(module._id)}
          >
            {module.lessons?.map((lesson) => (
              <Lesson key={lesson._id} title={lesson.name}>
                {lesson.description && (
                  <li className="wd-content-item">{lesson.description}</li>
                )}
              </Lesson>
            ))}
          </Module>
        ))}
      </ul>
    </div>
  );
}
