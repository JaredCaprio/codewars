/* <1> https://www.codewars.com/kata/5785cd91a1b8d5c06e000007/train/javascript
There is a sentence which has a mistake in its ordering.

The part with a capital letter should be the first word.

Please build a function for re-ordering
Examples

>>> re_ordering('ming Yao')
'Yao ming'

>>> re_ordering('Mano donowana')
'Mano donowana'

>>> re_ordering('wario LoBan hello')
'LoBan wario hello'

>>> re_ordering('bull color pig Patrick')
'Patrick bull color pig'
*/

function reOrdering(text) {
  let splitArr = text.split(" ");
  let output = [];
  splitArr.forEach((word) => {
    if (word[0].toUpperCase() === word[0]) {
      output.unshift(word);
    } else {
      output.push(word);
    }
  });
  return output.join(" ");
}
//</1>
