"use client";

import { useEffect, useState } from "react";

export default function HelloRoute() {
  const [data, setData] = useState<{ message: string } | null>(null);

  useEffect(() => {
    const load = async () => {
      const response = await fetch("/api/lab5/hello");
      setData(await response.json());
    };
    load();
  }, []);

  return (
    <div id="wd-hello-route">
      <h3>GET /api/lab5/hello (Next.js Route Handler)</h3>
      <pre>{data ? JSON.stringify(data, null, 2) : ""}</pre>
    </div>
  );
}
