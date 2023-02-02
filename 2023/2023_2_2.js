/* <1>

*/
function findMissingLetter(array) {
  let isLowerCase = array.some((letter) => letter === letter.toLowerCase());
  console.log(isLowerCase);

  for (let i = 1; i < array.length; i++) {
    const prevLett = array[i - 1].charCodeAt();
    const currLett = array[i].charCodeAt();

    if (prevLett !== currLett - 1) {
      let finalAns = String.fromCharCode(currLett - 1);
      return isLowerCase ? finalAns : finalAns.toUpperCase();
    }
  }
}
console.log(findMissingLetter(["a", "b", "c", "d", "f"]));

//</1>
