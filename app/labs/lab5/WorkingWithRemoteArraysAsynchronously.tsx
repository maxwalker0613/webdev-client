"use client";

import { useEffect, useState } from "react";
import { FaPencilAlt, FaPlusCircle, FaTrash } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import * as client from "./client";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
  description?: string;
  editing?: boolean;
};

export default function WorkingWithRemoteArraysAsynchronously() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const showError = (error: unknown) => {
    const e = error as { response?: { data?: { message?: string } } };
    setErrorMessage(e.response?.data?.message ?? "Something went wrong");
  };

  const createNewTodo = async () => {
    setErrorMessage(null);
    setTodos(await client.createNewTodo());
  };
  const postNewTodo = async () => {
    setErrorMessage(null);
    const newTodo = await client.postNewTodo({
      title: "New Posted Todo",
      completed: false,
    });
    setTodos([...todos, newTodo]);
  };
  const removeTodo = async (todo: Todo) => {
    setErrorMessage(null);
    setTodos(await client.removeTodo(todo));
  };
  const deleteTodo = async (todo: Todo) => {
    try {
      await client.deleteTodo(todo);
      setTodos(todos.filter((t) => t.id !== todo.id));
      setErrorMessage(null);
    } catch (error) {
      showError(error);
    }
  };
  const editTodo = (todo: Todo) => {
    setTodos(
      todos.map((t) => (t.id === todo.id ? { ...todo, editing: true } : t)),
    );
  };
  const updateTodo = async (todo: Todo) => {
    try {
      await client.updateTodo({
        id: todo.id,
        title: todo.title,
        completed: todo.completed,
        description: todo.description,
      } as { id: number });
      setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
      setErrorMessage(null);
    } catch (error) {
      showError(error);
    }
  };

  useEffect(() => {
    const fetchTodos = async () => {
      setTodos(await client.fetchTodos());
    };
    fetchTodos();
  }, []);

  return (
    <div id="wd-working-with-arrays-async">
      <h3>Working with Arrays Asynchronously</h3>
      <h4 className="flex items-center gap-2">
        Todos
        <FaPlusCircle
          onClick={createNewTodo}
          id="wd-create-todo"
          className="cursor-pointer text-green-600"
        />
        <FaPlusCircle
          onClick={postNewTodo}
          id="wd-post-todo"
          className="cursor-pointer text-blue-600"
        />
      </h4>
      {errorMessage && (
        <p
          id="wd-todo-error-message"
          className="rounded bg-red-100 px-3 py-2 text-red-800"
        >
          {errorMessage}
        </p>
      )}
      <ul className="list-none p-0">
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={(e) =>
                updateTodo({ ...todo, completed: e.target.checked })
              }
            />
            {todo.editing ? (
              <input
                className="rounded border border-gray-300 px-2 py-1"
                value={todo.title}
                onChange={(e) =>
                  setTodos(
                    todos.map((t) =>
                      t.id === todo.id ? { ...t, title: e.target.value } : t,
                    ),
                  )
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    updateTodo({ ...todo, editing: false });
                  }
                }}
              />
            ) : (
              <span className={todo.completed ? "line-through" : ""}>
                {todo.title}
              </span>
            )}
            <FaPencilAlt
              onClick={() => editTodo(todo)}
              className="cursor-pointer text-yellow-600"
            />
            <FaTrash
              onClick={() => removeTodo(todo)}
              id="wd-remove-todo"
              className="cursor-pointer text-red-600"
            />
            <TiDelete
              onClick={() => deleteTodo(todo)}
              id="wd-delete-todo"
              className="cursor-pointer text-2xl text-red-600"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
