/* <1> https://www.codewars.com/kata/56576f82ab83ee8268000059/train/javascript
Kevin is noticing his space run out! Write a function that removes the spaces from the values and returns an array showing the space decreasing.
For example, running this function on the array ['i', 'have','no','space'] would produce ['i','ihave','ihaveno','ihavenospace']
*/
function spacey(array) {
  //init output arr
  let res = [];

  //loop over input arr using reduce to combine previous items together
  for (let i = 1; i < array.length + 1; i++) {
    let curArrItem = array.slice(0, i);
    res.push(
      curArrItem.reduce((acc, cur) => {
        return acc + cur;
      })
    );
  }
  //return result array
  return res;
}
//</1>
