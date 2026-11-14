"use client";

import { useState } from "react";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const linkClass = "rounded bg-blue-600 px-3 py-1.5 text-sm text-white";
const inputClass = "rounded border border-gray-300 px-2 py-1";

export default function QueryParameters() {
  const [a, setA] = useState("34");
  const [b, setB] = useState("23");
  const base = `${HTTP_SERVER}/lab5/calculator`;
  return (
    <div id="wd-query-parameters">
      <h4>Query Parameters</h4>
      <div className="mb-2 flex gap-2">
        <input
          id="wd-query-a"
          type="number"
          className={inputClass}
          value={a}
          onChange={(e) => setA(e.target.value)}
        />
        <input
          id="wd-query-b"
          type="number"
          className={inputClass}
          value={b}
          onChange={(e) => setB(e.target.value)}
        />
      </div>
      <div className="flex gap-2">
        <a
          id="wd-query-parameter-add"
          className={linkClass}
          href={`${base}?operation=add&a=${a}&b=${b}`}
        >
          Add {a} + {b}
        </a>
        <a
          id="wd-query-parameter-subtract"
          className={linkClass}
          href={`${base}?operation=subtract&a=${a}&b=${b}`}
        >
          Subtract {a} - {b}
        </a>
        <a
          id="wd-query-parameter-multiply"
          className={linkClass}
          href={`${base}?operation=multiply&a=${a}&b=${b}`}
        >
          Multiply {a} × {b}
        </a>
        <a
          id="wd-query-parameter-divide"
          className={linkClass}
          href={`${base}?operation=divide&a=${a}&b=${b}`}
        >
          Divide {a} ÷ {b}
        </a>
      </div>
    </div>
  );
}
