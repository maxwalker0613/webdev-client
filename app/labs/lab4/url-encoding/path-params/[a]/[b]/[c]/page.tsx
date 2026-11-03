"use client";

import { useParams } from "next/navigation";

export default function PathCalculatorWithC() {
  const params = useParams();
  const a = parseFloat(params.a as string);
  const b = parseFloat(params.b as string);
  const c = parseFloat(params.c as string);
  return (
    <div id="wd-path-calculator-c">
      <h1>Calculator – Path Parameters with c</h1>
      <p>
        a = <code>{params.a}</code>, b = <code>{params.b}</code>, c ={" "}
        <code>{params.c}</code>
      </p>
      <h2 className="text-green-700">Sum = {a + b + c}</h2>
    </div>
  );
}
