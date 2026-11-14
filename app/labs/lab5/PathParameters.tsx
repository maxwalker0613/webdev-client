"use client";

import { useState } from "react";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const linkClass = "rounded bg-blue-600 px-3 py-1.5 text-sm text-white";
const inputClass = "rounded border border-gray-300 px-2 py-1";

export default function PathParameters() {
  const [a, setA] = useState("34");
  const [b, setB] = useState("23");
  return (
    <div id="wd-path-parameters">
      <h4>Path Parameters</h4>
      <div className="mb-2 flex gap-2">
        <input
          id="wd-path-a"
          type="number"
          className={inputClass}
          value={a}
          onChange={(e) => setA(e.target.value)}
        />
        <input
          id="wd-path-b"
          type="number"
          className={inputClass}
          value={b}
          onChange={(e) => setB(e.target.value)}
        />
      </div>
      <div className="flex gap-2">
        <a
          id="wd-path-parameter-add"
          className={linkClass}
          href={`${HTTP_SERVER}/lab5/add/${a}/${b}`}
        >
          Add {a} + {b}
        </a>
        <a
          id="wd-path-parameter-subtract"
          className={linkClass}
          href={`${HTTP_SERVER}/lab5/subtract/${a}/${b}`}
        >
          Subtract {a} - {b}
        </a>
        <a
          id="wd-path-parameter-multiply"
          className={linkClass}
          href={`${HTTP_SERVER}/lab5/multiply/${a}/${b}`}
        >
          Multiply {a} × {b}
        </a>
        <a
          id="wd-path-parameter-divide"
          className={linkClass}
          href={`${HTTP_SERVER}/lab5/divide/${a}/${b}`}
        >
          Divide {a} ÷ {b}
        </a>
      </div>
    </div>
  );
}
