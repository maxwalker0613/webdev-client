import "./index.css";
import ForegroundColors from "./ForegroundColors";
import BackgroundColors from "./BackgroundColors";

export default function Lab2() {
  return (
    <div id="wd-lab2">
      <h2>Lab 2 - Cascading Style Sheets</h2>
      <h3>Styling with the STYLE attribute</h3>
      <p>
        Style attribute allows configuring look and feel right on the element.
        Although it&apos;s very convenient it is considered bad practice and you
        should avoid using the style attribute
      </p>
      <p
        id="wd-ai-style-attr"
        style={{ backgroundColor: "purple", color: "white" }}
      >
        This paragraph uses the style attribute to set a purple background and
        white text
      </p>
      <p style={{ backgroundColor: "green", color: "yellow" }}>
        On my own part with a green background and yellow text
      </p>

      <div id="wd-css-id-selectors">
        <h3>ID selectors</h3>
        <p id="wd-id-selector-1">
          Instead of changing the look and feel of all the elements of the same
          name, e.g., P, we can refer to a specific element by its ID
        </p>
        <p id="wd-id-selector-2">
          Here&apos;s another paragraph using a different ID and a different
          look and feel
        </p>
        <p id="wd-ai-id-selector">
          This paragraph is styled by its own ID selector with a teal background
          and white text
        </p>
        <p id="wd-id-selector-3">
          On my own part with an orange background and blue text
        </p>
      </div>

      <div id="wd-css-class-selectors">
        <h3>Class selectors</h3>
        <p className="wd-class-selector">
          Instead of using IDs to refer to elements, you can use an
          element&apos;s CLASS attribute
        </p>
        <h4 className="wd-class-selector">
          This heading has same style as paragraph above
        </h4>
      </div>

      <div id="wd-ai-class-selectors">
        <p className="wd-ai-class-selector">
          This paragraph is styled by a sample class selector with a maroon
          background and white text
        </p>
        <h4 className="wd-ai-class-selector">
          This heading has same style as paragraph above
        </h4>
      </div>

      <div id="wd-your-class">
        <p className="wd-your-class">
          This paragraph is styled by &quot;your class&quot; with a lightgrey
          background and darkgreen text
        </p>
        <h4 className="wd-your-class">
          This heading has same style as paragraph above
        </h4>
      </div>

      <div id="wd-css-document-structure">
        <div className="wd-selector-1">
          <h3>Document structure selectors</h3>
          <div className="wd-selector-2">
            Selectors can be combined to refer elements in particular places in
            the document
            <p className="wd-selector-3">
              This paragraph&apos;s red background is referenced as
              <br />
              .selector-2 .selector3
              <br />
              meaning the descendant of some ancestor.
              <br />
              <span className="wd-selector-4">
                Whereas this span is a direct child of its parent
              </span>
              <br />
              <span className="wd-ai-selector-5">
                This span is a descendant of .wd-selector-1
              </span>
              <br />
              You can combine these relationships to create specific styles
              depending on the document structure
            </p>
            <p className="wd-my-selector">
              On my own part: a paragraph that is a direct child of
              wd-selector-2
            </p>
          </div>
        </div>
      </div>

      <div id="wd-css-cascade">
        <h3>CSS selection rule mechanism</h3>
        <p id="wd-my-cascade" className="wd-my-cascade-class">
          On my own part: this paragraph matches a tag rule (green), a class
          rule (orange), and an ID rule (grey). The ID rule wins.
        </p>
        <p id="wd-ai-cascade" className="wd-ai-cascade">
          Sample paragraph: tag rule green, class rule yellow, ID rule red. The
          ID rule wins.
        </p>
      </div>

      <ForegroundColors />
      <BackgroundColors />
    </div>
  );
}
