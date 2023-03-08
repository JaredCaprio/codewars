/* <1> https://www.codewars.com/kata/59e9f404fc3c49ab24000112/train/javascript

Make your strings more nerdy: Replace all 'a'/'A' with 4, 'e'/'E' with 3 and 'l' 
with 1 e.g. "Fundamentals" --> "Fund4m3nt41s"
*/
function nerdify(txt) {
  let output = "";

  for (let i = 0; i < txt.length; i++) {
    switch (txt[i]) {
      case "a":
      case "A":
        output += "4";
        break;
      case "e":
      case "E":
        output += "3";
        break;
      case "l":
        output += "1";
        break;
      default:
        output += txt[i];
    }
  }
  return output;
}
//</1>
