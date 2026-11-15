import Environment from "./Environment";
import PathParameters from "./PathParameters";
import QueryParameters from "./QueryParameters";
import WorkingWithRemoteObjects from "./WorkingWithRemoteObjects";
import WorkingWithRemoteArrays from "./WorkingWithRemoteArrays";
import HttpClient from "./HttpClient";
import WorkingWithRemoteObjectsAsynchronously from "./WorkingWithRemoteObjectsAsynchronously";
import WorkingWithRemoteArraysAsynchronously from "./WorkingWithRemoteArraysAsynchronously";
import HelloRoute from "./HelloRoute";
import Calculator from "./Calculator";

export default function Lab5() {
  return (
    <div id="wd-lab5" className="space-y-6">
      <h2>Lab 5</h2>
      <Environment />
      <PathParameters />
      <QueryParameters />
      <WorkingWithRemoteObjects />
      <WorkingWithRemoteArrays />
      <HttpClient />
      <WorkingWithRemoteObjectsAsynchronously />
      <WorkingWithRemoteArraysAsynchronously />
      <HelloRoute />
      <Calculator />
    </div>
  );
}
