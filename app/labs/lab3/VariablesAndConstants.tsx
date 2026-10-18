export default function VariablesAndConstants() {
  var functionScoped = 2;
  let blockScoped = 5;
  const constant1 = functionScoped - blockScoped;
  const sampleSum = functionScoped + blockScoped;

  // On your own
  let userName = "Yuxin";
  const greeting = "Hello, " + userName + "!";
  return (
    <div id="wd-variables-and-constants">
      <h4>Variables and Constants</h4>
      functionScoped = {functionScoped}
      <br />
      blockScoped = {blockScoped}
      <br />
      constant1 = {constant1}
      <br />
      userName = {userName}
      <br />
      greeting = {greeting}
      <br />
      sampleSum = {sampleSum}
      <hr />
    </div>
  );
}
