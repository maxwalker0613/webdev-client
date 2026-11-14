"use client";

import { useState } from "react";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const linkClass = "rounded bg-blue-600 px-3 py-1.5 text-sm text-white";
const inputClass = "rounded border border-gray-300 px-2 py-1";

export default function WorkingWithRemoteArrays() {
  const [todo, setTodo] = useState({
    id: "1",
    title: "NodeJS Assignment",
    description: "Create a NodeJS server",
    completed: false,
  });
  const API = `${HTTP_SERVER}/lab5/todos`;

  return (
    <div id="wd-working-with-arrays">
      <h3>Working with Arrays</h3>

      <h4>Retrieving Arrays</h4>
      <a id="wd-retrieve-todos" className={linkClass} href={API}>
        Get Todos
      </a>

      <h4 className="mt-4">Retrieving an Item from an Array by ID</h4>
      <div className="flex items-center gap-2">
        <a
          id="wd-retrieve-todo-by-id"
          className={linkClass}
          href={`${API}/${todo.id}`}
        >
          Get Todo by ID
        </a>
        <input
          id="wd-todo-id"
          className={inputClass}
          value={todo.id}
          onChange={(e) => setTodo({ ...todo, id: e.target.value })}
        />
      </div>

      <h4 className="mt-4">Filtering Array Items</h4>
      <a
        id="wd-retrieve-completed-todos"
        className={linkClass}
        href={`${API}?completed=true`}
      >
        Get Completed Todos
      </a>

      <h4 className="mt-4">Creating new Items in an Array</h4>
      <a id="wd-create-todo" className={linkClass} href={`${API}/create`}>
        Create Todo
      </a>

      <h4 className="mt-4">Removing from an Array</h4>
      <a
        id="wd-remove-todo"
        className={linkClass}
        href={`${API}/${todo.id}/delete`}
      >
        Remove Todo with ID = {todo.id}
      </a>

      <h4 className="mt-4">Updating an Item in an Array</h4>
      <div className="mb-2 flex items-center gap-2">
        <a
          id="wd-update-todo-title"
          className={linkClass}
          href={`${API}/${todo.id}/title/${encodeURIComponent(todo.title)}`}
        >
          Update Todo
        </a>
        <input
          id="wd-todo-title"
          className={inputClass}
          value={todo.title}
          onChange={(e) => setTodo({ ...todo, title: e.target.value })}
        />
      </div>
      <div className="mb-2 flex items-center gap-2">
        <a
          id="wd-complete-todo"
          className={linkClass}
          href={`${API}/${todo.id}/completed/${todo.completed}`}
        >
          Complete Todo ID = {todo.id}
        </a>
        <label className="flex items-center gap-1">
          <input
            id="wd-todo-completed"
            type="checkbox"
            checked={todo.completed}
            onChange={(e) => setTodo({ ...todo, completed: e.target.checked })}
          />
          Completed
        </label>
      </div>
      <div className="mb-2 flex items-center gap-2">
        <a
          id="wd-describe-todo"
          className={linkClass}
          href={`${API}/${todo.id}/description/${encodeURIComponent(todo.description)}`}
        >
          Describe Todo ID = {todo.id}
        </a>
        <input
          id="wd-todo-description"
          className={inputClass}
          value={todo.description}
          onChange={(e) => setTodo({ ...todo, description: e.target.value })}
        />
      </div>
    </div>
  );
}
