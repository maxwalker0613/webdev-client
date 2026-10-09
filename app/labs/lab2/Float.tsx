const IMG = "/images/reactjs.jpg";
const LOREM =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius hic reprehenderit doloremque adipisci iste deserunt. Inventore, hic. Esse nihil unde aut, dignissimos eos consequatur veniam distinctio?";

export default function Float() {
  return (
    <div id="wd-float-divs">
      <h2>Float</h2>
      <div>
        <img className="wd-float-right" src={IMG} alt="React JS" />
        {LOREM} {LOREM}
        <img className="wd-float-left" src={IMG} alt="React JS" />
        {LOREM} {LOREM}
        <img className="wd-float-right" src={IMG} alt="React JS" />
        {LOREM} {LOREM}
        <img className="wd-float-left" src={IMG} alt="React JS" />
        {LOREM} {LOREM}
        <div className="wd-float-done" />
      </div>
      <div>
        <div
          id="wd-ai-float"
          className="wd-float-right wd-dimension-landscape wd-bg-color-gray"
        >
          Gray
        </div>
        <p>{LOREM}</p>
        <div className="wd-float-done" />
      </div>
      <div>
        <div className="wd-float-left wd-dimension-portrait wd-bg-color-yellow">
          Yellow
        </div>
        <div className="wd-float-left wd-dimension-portrait wd-bg-color-blue wd-fg-color-white">
          Blue
        </div>
        <div className="wd-float-left wd-dimension-portrait wd-bg-color-red">
          Red
        </div>
        <img className="wd-float-right" src={IMG} alt="React JS" />
        <div className="wd-float-done" />
      </div>

      <div id="wd-my-float">
        <img className="wd-float-left" src={IMG} alt="React JS" />
        <p>On my own part: {LOREM}</p>
        <div className="wd-float-done" />
      </div>
    </div>
  );
}
