export default function Positions() {
  return (
    <div id="wd-css-positions">
      <h2>Positions</h2>
      <div id="wd-css-position-relative">
        <h2>Relative</h2>
        <div className="wd-bg-color-gray">
          <div className="wd-bg-color-yellow wd-dimension-portrait">
            <div className="wd-pos-relative-nudge-down-right">Portrait</div>
          </div>
          <div className="wd-pos-relative-nudge-up-right wd-bg-color-blue wd-fg-color-white wd-dimension-landscape">
            Landscape
          </div>
          <div className="wd-bg-color-red wd-dimension-square">Square</div>
          <div
            id="wd-ai-relative"
            className="wd-ai-pos-relative-nudge wd-bg-color-yellow wd-dimension-square"
          >
            Nudged
          </div>
          <div
            id="wd-my-relative"
            className="wd-my-pos-relative-nudge wd-bg-color-green wd-fg-color-white wd-dimension-landscape"
          >
            On my own part
          </div>
        </div>
      </div>

      <div id="wd-css-position-absolute">
        <h2>Absolute position</h2>
        <div className="wd-pos-relative" style={{ height: 150 }}>
          <div className="wd-pos-absolute-10-10 wd-bg-color-yellow wd-dimension-portrait">
            Portrait
          </div>
          <div className="wd-pos-absolute-50-50 wd-bg-color-blue wd-fg-color-white wd-dimension-landscape">
            Landscape
          </div>
          <div className="wd-pos-absolute-120-20 wd-bg-color-red wd-dimension-square">
            Square
          </div>
          <div
            id="wd-my-absolute"
            className="wd-my-pos-absolute-tr wd-bg-color-green wd-fg-color-white wd-dimension-square"
          >
            On my own part
          </div>
          <div
            id="wd-ai-absolute"
            className="wd-ai-pos-absolute-br wd-bg-color-gray wd-dimension-square"
          >
            Bottom right
          </div>
        </div>
      </div>
    </div>
  );
}
