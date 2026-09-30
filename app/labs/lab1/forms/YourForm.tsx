"use client";

export default function YourForm() {
  return (
    <form
      id="wd-your-form"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <h4>Student Profile</h4>

      {/* Text fields */}
      <label htmlFor="wd-your-first-name">First Name:</label>
      <input
        id="wd-your-first-name"
        placeholder="Your first name"
        defaultValue="Yuxin"
      />
      <br />
      <label htmlFor="wd-your-last-name">Last Name:</label>
      <input
        id="wd-your-last-name"
        placeholder="Your last name"
        defaultValue="Li"
      />
      <br />
      <label htmlFor="wd-your-student-id">Student ID:</label>
      <input id="wd-your-student-id" placeholder="Your student ID" />
      <br />
      <label htmlFor="wd-your-password">Password:</label>
      <input
        type="password"
        id="wd-your-password"
        placeholder="Your password"
      />
      <br />

      {/* Textarea */}
      <label htmlFor="wd-your-bio">Bio:</label>
      <br />
      <textarea
        id="wd-your-bio"
        cols={40}
        rows={5}
        defaultValue="I am a graduate student in computer science at Northeastern University. I come from an English and linguistics background, and I am learning to build full-stack web applications."
      />
      <br />

      {/* Radio buttons */}
      <label>Class standing:</label>
      <br />
      <input type="radio" name="your-standing" id="wd-your-freshman" />
      <label htmlFor="wd-your-freshman">Freshman</label>
      <br />
      <input type="radio" name="your-standing" id="wd-your-sophomore" />
      <label htmlFor="wd-your-sophomore">Sophomore</label>
      <br />
      <input type="radio" name="your-standing" id="wd-your-junior" />
      <label htmlFor="wd-your-junior">Junior</label>
      <br />
      <input type="radio" name="your-standing" id="wd-your-senior" />
      <label htmlFor="wd-your-senior">Senior</label>
      <br />
      <input
        type="radio"
        name="your-standing"
        id="wd-your-graduate"
        defaultChecked
      />
      <label htmlFor="wd-your-graduate">Graduate</label>
      <br />

      <label>Student status:</label>
      <br />
      <input
        type="radio"
        name="your-status"
        id="wd-your-full-time"
        defaultChecked
      />
      <label htmlFor="wd-your-full-time">Full-time</label>
      <br />
      <input type="radio" name="your-status" id="wd-your-part-time" />
      <label htmlFor="wd-your-part-time">Part-time</label>
      <br />

      {/* Checkboxes */}
      <label>Interests:</label>
      <br />
      <input
        type="checkbox"
        name="your-interests"
        id="wd-your-interest-coding"
        defaultChecked
      />
      <label htmlFor="wd-your-interest-coding">Coding</label>
      <br />
      <input
        type="checkbox"
        name="your-interests"
        id="wd-your-interest-design"
      />
      <label htmlFor="wd-your-interest-design">Design</label>
      <br />
      <input
        type="checkbox"
        name="your-interests"
        id="wd-your-interest-research"
        defaultChecked
      />
      <label htmlFor="wd-your-interest-research">Research</label>
      <br />

      {/* Dropdowns */}
      <label htmlFor="wd-your-major">Major: </label>
      <select id="wd-your-major" defaultValue="CS">
        <option value="CS">Computer Science</option>
        <option value="DS">Data Science</option>
        <option value="SE">Software Engineering</option>
        <option value="IS">Information Systems</option>
      </select>
      <br />
      <label htmlFor="wd-your-topics">Topics to deepen: </label>
      <br />
      <select multiple id="wd-your-topics" defaultValue={["REACT", "NODE"]}>
        <option value="REACT">React</option>
        <option value="NODE">Node.js</option>
        <option value="PYTHON">Python</option>
        <option value="JAVASCRIPT">JavaScript</option>
      </select>
      <br />

      {/* Typed fields */}
      <label htmlFor="wd-your-email">Email: </label>
      <input
        type="email"
        id="wd-your-email"
        placeholder="you@northeastern.edu"
      />
      <br />
      <label htmlFor="wd-your-graduation-year">Graduation year: </label>
      <input
        type="number"
        id="wd-your-graduation-year"
        placeholder="2028"
        min="2026"
        max="2030"
      />
      <br />
      <label htmlFor="wd-your-birthday">Birthday: </label>
      <input
        type="date"
        id="wd-your-birthday"
        defaultValue="2000-01-01"
        min="1900-01-01"
        max="2025-12-31"
      />
      <br />
      <label htmlFor="wd-your-excitement-level">
        Excitement level (0 to 10):{" "}
      </label>
      <input
        type="range"
        id="wd-your-excitement-level"
        defaultValue="8"
        min="0"
        max="10"
      />
      <br />

      {/* Buttons */}
      <button id="wd-your-save" type="submit">
        Save
      </button>
      <button id="wd-your-cancel" type="button">
        Cancel
      </button>
    </form>
  );
}
