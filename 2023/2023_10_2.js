/* <1>  https://www.codewars.com/kata/5768a693a3205e1cc100071f/train/javascript
Some people just have a first name; some people have first and last names and some people have first, middle and last names.

You task is to initialize the middle names (if there is any).
Examples

'Jack Ryan'                   => 'Jack Ryan'
'Lois Mary Lane'              => 'Lois M. Lane'
'Dimitri'                     => 'Dimitri'
'Alice Betty Catherine Davis' => 'Alice B. C. Davis'
*/

function initializeNames(name) {
  let split = name.split(" ");
  let lastName = split.pop() || "";
  let firstName = split.shift() || "";
  let middleInitials = split
    .map((name) => {
      let firstLetter = name[0].toUpperCase();
      return `${firstLetter}.`;
    })
    .join(" ");
  let fullName = `${firstName} ${lastName}`.trim();

  return split.length === 0
    ? `${fullName}`
    : `${firstName} ${middleInitials} ${lastName}`;
}

//</1>
