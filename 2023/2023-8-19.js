/*<1> https://www.codewars.com/kata/5868812b15f0057e05000001/train/javascript
You'll be given a list of two strings, and each will contain exactly one colon (":") in 
the middle (but not at beginning or end). The length of the strings, before and after the 
colon, are random.

Your job is to return a list of two strings (in the same order as the original list), but 
with the characters after each colon swapped.

*/
function tailSwap(arr) {
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    res.push(arr[i].split(":"));
  }

  let tmp = res[0][1];
  res[0][1] = res[1][1];
  res[1][1] = tmp;

  res.forEach((item, index) => {
    res[index] = item.join(":");
  });

  return res;
}
//</1>
