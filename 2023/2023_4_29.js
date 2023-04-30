/* <1>

*/
function all(arr, fun) {
  if (arr.length < 1) return true;
  const res = [];

  arr.forEach((item) => {
    res.push(fun(item));
  });
  console.log(res);
  return res.every((val) => {
    val === "true";
  });
}

console.log(
  all([1, 2, 3, 4, 5], function (v) {
    return v > 0;
  })
);
//</1>
