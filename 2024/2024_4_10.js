/* <1> https://www.codewars.com/kata/57037ed25a7263ac35000c80/train/javascript
Generate user links

Your task is to create userlinks for the url, you will be given a username and must return a valid link.
Example

generate_link('matt c')
http://www.codewars.com/users/matt%20c

reference

use this as a reference encoding (http://www.w3schools.com/tags/ref_urlencode.asp)


NOTES:
function will take in user.  User will be a name represented as a string, not a number, boolean, array, object, etc.
The function will return a user link encoded using the encodeURIComponent() function.
*/

function generateLink(user) {
  //use the encodeURIComponent() to encode the name
  let encodedName = encodeURIComponent(user);

  //return interpolated link
  return `http://www.codewars.com/users/${encodedName}`;
}

//test cases
console.log(generateLink("John Smith"));
console.log(generateLink("Jared Caprio"));
console.log(generateLink("Teddy Fresh"));
console.log(generateLink("Penny"));
//</1>
