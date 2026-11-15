"use client";

import { useState } from "react";

const OPERATIONS = [
  { value: "add", label: "+" },
  { value: "subtract", label: "-" },
  { value: "multiply", label: "×" },
  { value: "divide", label: "÷" },
];
const inputClass = "rounded border border-gray-300 px-2 py-1";

export default function Calculator() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [operation, setOperation] = useState("add");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const calculate = async (op: string) => {
    const params = new URLSearchParams({ a, b, operation: op });
    const response = await fetch(`/api/lab5/calculator?${params.toString()}`);
    const data = await response.json();
    if (!response.ok) {
      setOutput("");
      setError(data.error);
      return;
    }
    setError("");
    const label = OPERATIONS.find((o) => o.value === data.operation)?.label;
    setOutput(`${data.a} ${label} ${data.b} = ${data.result}`);
  };

  const changeOperation = (op: string) => {
    setOperation(op);
    if (a !== "" && b !== "") {
      calculate(op);
    }
  };

  return (
    <div id="wd-calculator">
      <h3>Calculator (Next.js Web API)</h3>
      <div className="flex flex-col gap-2">
        <label className="flex items-center gap-2">
          A:
          <input
            id="wd-calc-a"
            type="number"
            className={inputClass}
            placeholder="A"
            value={a}
            onChange={(e) => setA(e.target.value)}
          />
        </label>
        <label className="flex items-center gap-2">
          B:
          <input
            id="wd-calc-b"
            type="number"
            className={inputClass}
            placeholder="B"
            value={b}
            onChange={(e) => setB(e.target.value)}
          />
        </label>
        <label className="flex items-center gap-2">
          Operation:
          <select
            id="wd-calc-operation"
            className={inputClass}
            value={operation}
            onChange={(e) => changeOperation(e.target.value)}
          >
            {OPERATIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </label>
        <div>
          <button
            id="wd-calc-button"
            type="button"
            className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
            onClick={() => calculate(operation)}
          >
            Calculate
          </button>
        </div>
        <input
          id="wd-calc-output"
          className={inputClass}
          readOnly
          value={output}
          placeholder="Result"
        />
        {error && (
          <p
            id="wd-calc-error"
            className="rounded bg-red-100 px-3 py-2 text-red-800"
          >
            {error}
          </p>
        )}
      </div>
    </div>
  );
}
