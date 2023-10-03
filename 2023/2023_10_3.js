/* <1> https://www.codewars.com/kata/5ebd53ea50d0680031190b96/train/javascript
Your Task

Complete the function to convert an integer into a string of the Turkish name.

    input will always be an integer 0-99;
    output should always be lower case.

Background

Forming the Turkish names for the numbers 0-99 is very straightforward:

    units (0-9) and tens (10, 20, 30, etc.) each have their own unique name;
    all other numbers are simply [tens] + [unit], like twenty one in English.

Unlike English, Turkish does not have "teen"-suffixed numbers; e.g. 13 would be directly translated as "ten three" rather than "thirteen" in English.

Turkish names of units and tens are as follows:

0 = sıfır
1 = bir
2 = iki
3 = üç
4 = dört
5 = beş
6 = altı
7 = yedi
8 = sekiz
9 = dokuz

10 = on
20 = yirmi
30 = otuz
40 = kırk
50 = elli
60 = altmış
70 = yetmiş
80 = seksen
90 = doksan

Examples

 1  -->  "bir"
13  -->  "on üç"
27  -->  "yirmi yedi"
38  -->  "otuz sekiz"
77  -->  "yetmiş yedi"
94  -->  "doksan dört"

Good luck, or iyi şanslar :)
*/

const getTurkishNumber = (num) => {
  const zeroToNine = {
    dokuz: 9,
    sekiz: 8,
    yedi: 7,
    altı: 6,
    beş: 5,
    dört: 4,
    üç: 3,
    iki: 2,
    bir: 1,
    sıfır: 0,
  };

  const tenToNinety = {
    doksan: 90,
    seksen: 80,
    yetmiş: 70,
    altmış: 60,
    elli: 50,
    kırk: 40,
    otuz: 30,
    yirmi: 20,
    on: 10,
  };

  let output = [];
  let runningCount = num;

  for (const num in tenToNinety) {
    if (tenToNinety[num] === runningCount) {
      output.push(num);
      return output.join("");
    } else if (tenToNinety[num] < runningCount) {
      runningCount -= tenToNinety[num];
      output.push(num);
      break;
    }
  }

  for (const num in zeroToNine) {
    if (runningCount === zeroToNine[num]) {
      runningCount -= zeroToNine[num];
      output.push(num);
      break;
    }
  }

  return output.join(" ");
};
//</1>
