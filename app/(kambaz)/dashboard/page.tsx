"use client";

import { useCallback, useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import { emptyCourse, type Course } from "../store/coursesStore";
import { useAccountContext } from "../account/AccountContext";
import * as client from "../courses/client";

const inputClass =
  "mb-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5";

export default function Dashboard() {
  const [myCourses, setMyCourses] = useState<Course[]>([]);
  const [allCourses, setAllCourses] = useState<Course[]>([]);
  const [showAll, setShowAll] = useState(false);
  const [course, setCourse] = useState<Course>(emptyCourse);
  const { currentUser } = useAccountContext();

  const fetchCourses = useCallback(async () => {
    try {
      setMyCourses(await client.findMyCourses());
    } catch {
      setMyCourses([]);
    }
    try {
      setAllCourses(await client.fetchAllCourses());
    } catch {
      setAllCourses([]);
    }
  }, []);

  useEffect(() => {
    fetchCourses();
  }, [currentUser, fetchCourses]);

  const enrolledIds = new Set(myCourses.map((c) => c._id));
  const visibleCourses = showAll ? allCourses : myCourses;

  const onAddCourse = async () => {
    if (!currentUser) return;
    await client.createCourse(course);
    await fetchCourses();
  };
  const onDeleteCourse = async (courseId: string) => {
    await client.deleteCourse(courseId);
    await fetchCourses();
  };
  const onUpdateCourse = async () => {
    try {
      await client.updateCourse(course);
      await fetchCourses();
    } catch {
      /* the selected course no longer exists on the server */
    }
  };
  const onEnroll = async (courseId: string) => {
    if (!currentUser) return;
    await client.enrollIntoCourse(currentUser._id, courseId);
    await fetchCourses();
  };
  const onUnenroll = async (courseId: string) => {
    if (!currentUser) return;
    await client.unenrollFromCourse(currentUser._id, courseId);
    await fetchCourses();
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h5 className="flex flex-wrap items-center gap-2">
        New Course
        <button
          type="button"
          className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
          id="wd-add-new-course-click"
          onClick={onAddCourse}
        >
          Add
        </button>
        <button
          type="button"
          className="rounded bg-yellow-400 px-3 py-1.5 text-sm font-medium"
          id="wd-update-course-click"
          onClick={onUpdateCourse}
        >
          Update
        </button>
      </h5>
      <input
        className={`${inputClass} mt-2`}
        value={course.name}
        placeholder="Course name"
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
        id="wd-course-name"
      />
      <input
        className={inputClass}
        value={course.number}
        placeholder="Course number"
        onChange={(e) => setCourse({ ...course, number: e.target.value })}
        id="wd-course-number"
      />
      <input
        type="date"
        className={inputClass}
        value={course.startDate}
        onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
        id="wd-course-start-date"
      />
      <textarea
        className={`${inputClass} mb-3`}
        rows={3}
        value={course.description}
        placeholder="Description"
        onChange={(e) => setCourse({ ...course, description: e.target.value })}
        id="wd-course-description"
      />
      <hr />
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 id="wd-dashboard-published">
          Published Courses ({visibleCourses.length})
        </h2>
        <button
          type="button"
          id="wd-enrollments-toggle"
          className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "My Courses" : "Enrollments"}
        </button>
      </div>{" "}
      <hr />
      <div id="wd-dashboard-courses" className="flex flex-wrap gap-8">
        {visibleCourses.map((c) => (
          <CourseCard
            key={c._id}
            course={c}
            onEdit={() => setCourse(c)}
            onDelete={() => onDeleteCourse(c._id)}
            enrollment={
              showAll && currentUser
                ? enrolledIds.has(c._id)
                  ? { label: "Unenroll", onClick: () => onUnenroll(c._id) }
                  : { label: "Enroll", onClick: () => onEnroll(c._id) }
                : undefined
            }
          />
        ))}
      </div>
    </div>
  );
}
