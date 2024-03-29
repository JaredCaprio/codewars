/* <1> https://www.codewars.com/kata/577bd026df78c19bca0002c0/train/javascript
Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

    S is misinterpreted as 5
    O is misinterpreted as 0
    I is misinterpreted as 1

The test cases contain numbers only by mistake.
*/

const correct = (string) =>
  string.replace(/0/g, "O").replace(/5/g, "S").replace(/1/g, "I");

//test cases
console.log(correct("L0ND0N"), "LONDON");
console.log(correct("51NGAP0RE"), "SINGAPORE");
console.log(correct("PAR15"), "PARIS");
//</1>
