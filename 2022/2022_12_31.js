/*<1>https://www.codewars.com/kata/5533c2a50c4fea6832000101/train/javascript
There are two lists, possibly of different lengths. The first one consists of keys,
the second one consists of values. Write a function createDict(keys, values) that
returns a dictionary created from keys and values. If there are not enough values,
the rest of keys should have a None (JS null)value. If there not enough keys,
just ignore the rest of values.

Example 1:
keys = ['a', 'b', 'c', 'd']
values = [1, 2, 3]
createDict(keys, values) // returns {'a': 1, 'b': 2, 'c': 3, 'd': null}

Example 2:
keys = ['a', 'b', 'c']
values = [1, 2, 3, 4]
createDict(keys, values) // returns {'a': 1, 'b': 2, 'c': 3}
*/
function createDict(keys, values) {
  let obj = {};
  keys.forEach((item, i) => {
    if (values[i] === undefined) values[i] = null;
    obj[item] = values[i];
  });
  return obj;
}
//</1>

/*<2> https://www.codewars.com/kata/57aa218e72292d98d500240f/train/javascript
Write function heron which calculates the area of a triangle with sides a, b, 
and c (x, y, z in COBOL).

Heron's formula:
s∗(s−a)∗(s−b)∗(s−c)\sqrt{s * (s - a) * (s - b) * (s - c)}s∗(s−a)∗(s−b)∗(s−c)​

where
s=a+b+c2s = \frac{a + b + c} 2s=2a+b+c​

Output should have 2 digits precision.
*/
function heron(a, b, c) {
  let s = (a + b + c) / 2;
  let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  return area;
}
//</2>
