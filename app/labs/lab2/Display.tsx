export default function Display() {
  return (
    <div id="wd-css-display">
      <h2>Display</h2>
      <h3>Inline</h3>
      <div>
        <span className="wd-display-inline wd-bg-color-red">Inline 1</span>
        <span className="wd-display-inline wd-bg-color-yellow">Inline 2</span>
        <span className="wd-display-inline wd-bg-color-blue wd-fg-color-white">
          Inline 3
        </span>
      </div>
      <h3>Inline-block</h3>
      <div>
        <span className="wd-display-inline-block wd-bg-color-red">
          Inline-block 1
        </span>
        <span className="wd-display-inline-block wd-bg-color-yellow">
          Inline-block 2
        </span>
        <span className="wd-display-inline-block wd-bg-color-blue wd-fg-color-white">
          Inline-block 3
        </span>
      </div>
      <h3>Block</h3>
      <div>
        <span className="wd-display-block wd-bg-color-red">Block 1</span>
        <span className="wd-display-block wd-bg-color-yellow">Block 2</span>
        <span className="wd-display-block wd-bg-color-blue wd-fg-color-white">
          Block 3
        </span>
      </div>
      <div id="wd-ai-display" className="wd-display-inline wd-bg-color-gray">
        A div displayed inline with a gray background
      </div>
      <div
        id="wd-my-display"
        className="wd-my-inline-div wd-bg-color-green wd-fg-color-white"
      >
        On my own part: a div forced to inline, so its width is ignored
      </div>
    </div>
  );
}
