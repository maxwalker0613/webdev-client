import Link from "next/link";

export default function TOC() {
  return (
    <div id="wd-toc">
      <p id="wd-toc-note">Yuxin Li</p>
      <ul>
        <li>
          <Link href="/labs">Home</Link>
        </li>
        <li>
          <Link href="/labs/lab1">Lab 1</Link>
        </li>
        <li>
          <Link href="/labs/lab2">Lab 2</Link>
        </li>
        <li>
          <Link href="/labs/lab3">Lab 3</Link>
        </li>
        <li>
          <Link href="/labs/lab4">Lab 4</Link>
        </li>
        <li>
          <Link href="/labs/lab5">Lab 5</Link>
        </li>
        <li>
          <Link href="/account/signin">Kambaz</Link>
        </li>
      </ul>
    </div>
  );
}
