/* <1> https://www.codewars.com/kata/5b68c7029756802aa2000176/train/javascript
Add two logs with base X, with the value of A and B. Example log A + log B 
where the base is X.
*/
function logs(x, a, b) {
  const log1 = Math.log(a) / Math.log(x);
  const log2 = Math.log(b) / Math.log(x);

  return log1 + log2;
}
//</1>
