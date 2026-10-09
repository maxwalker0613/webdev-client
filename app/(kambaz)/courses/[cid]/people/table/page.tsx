import { FaUserCircle } from "react-icons/fa";

const people = [
  // Course samples
  {
    name: "Tony Stark",
    login: "001234561S",
    section: "S101",
    role: "STUDENT",
    last: "2020-10-01",
    total: "10:21:32",
  },
  {
    name: "Bruce Wayne",
    login: "001234562S",
    section: "S101",
    role: "STUDENT",
    last: "2020-11-02",
    total: "23:32:23",
  },
  {
    name: "Steve Rogers",
    login: "001234563S",
    section: "S101",
    role: "STUDENT",
    last: "2020-10-02",
    total: "13:21:32",
  },
  {
    name: "Natasha Romanoff",
    login: "001234564S",
    section: "S101",
    role: "TA",
    last: "2020-11-05",
    total: "11:22:33",
  },
  // On my own part
  {
    name: "Amelia Yu",
    login: "001234571S",
    section: "S101",
    role: "STUDENT",
    last: "2020-12-01",
    total: "09:10:11",
  },
  {
    name: "Max Walker",
    login: "001234572S",
    section: "S101",
    role: "FACULTY",
    last: "2020-12-02",
    total: "12:13:14",
  },
  {
    name: "Claire Zhong",
    login: "001234573S",
    section: "S101",
    role: "TA",
    last: "2020-12-03",
    total: "15:16:17",
  },
  // Sample rows (with AI)
  {
    name: "Jane Sample",
    login: "001234581S",
    section: "S101",
    role: "STUDENT",
    last: "2021-01-04",
    total: "01:02:03",
  },
  {
    name: "Alex Sample",
    login: "001234582S",
    section: "S101",
    role: "STUDENT",
    last: "2021-01-05",
    total: "04:05:06",
  },
  {
    name: "Sam Sample",
    login: "001234583S",
    section: "S101",
    role: "TA",
    last: "2021-01-06",
    total: "07:08:09",
  },
];

export default function PeopleTable() {
  return (
    <div id="wd-people-table" className="overflow-x-auto">
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-neutral-300">
            <th className="p-2">Name</th>
            <th className="p-2">Login ID</th>
            <th className="p-2">Section</th>
            <th className="p-2">Role</th>
            <th className="p-2">Last Activity</th>
            <th className="p-2">Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {people.map((p) => (
            <tr key={p.login} className="odd:bg-neutral-50">
              <td className="p-2 text-nowrap">
                <FaUserCircle className="me-2 inline align-middle text-4xl text-neutral-400" />
                {p.name}
              </td>
              <td className="p-2">{p.login}</td>
              <td className="p-2">{p.section}</td>
              <td className="p-2">{p.role}</td>
              <td className="p-2">{p.last}</td>
              <td className="p-2">{p.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
