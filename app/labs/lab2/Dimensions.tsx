export default function Dimensions() {
  return (
    <div id="wd-css-dimensions">
      <h2>Dimension</h2>
      <div>
        <div className="wd-dimension-portrait wd-bg-color-yellow">Portrait</div>
        <div className="wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">
          Landscape
        </div>
        <div className="wd-dimension-square wd-bg-color-red">Square</div>
        <div id="wd-ai-dimension" className="wd-ai-dimension">
          This long sentence does not fit inside the box, so it spills past the
          declared width and height and makes the fixed size easy to see
        </div>

        <div
          id="wd-my-dimension"
          className="wd-my-dimension wd-bg-color-green wd-fg-color-white"
        >
          On my own part
        </div>
      </div>
    </div>
  );
}
