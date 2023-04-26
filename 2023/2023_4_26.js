/* <1>https://www.codewars.com/kata/57ecf6efc7fe13eb070000e1/train/javascript
Your colleagues have been looking over you shoulder. When you should have been doing your boring real job, 
you've been using the work computers to smash in endless hours of code wars.

In a team meeting, a terrible, awful person declares to the group that you aren't working. You're in trouble. 
You quickly have to gauge the feeling in the room to decide whether or not you should gather your things and leave.

Given an object (meet) containing team member names as keys, and their happiness rating out of 10 as the value, 
you need to assess the overall happiness rating of the group. If <= 5, return 'Get Out Now!'. Else return 'Nice Work Champ!'.

Happiness rating will be total score / number of people in the room.

Note that your boss is in the room (boss), their score is worth double it's face value 
(but they are still just one person!).
*/
function outed(meet, boss) {
  let totalScore = 0;
  for (const key in meet) {
    if (key === boss) {
      totalScore += meet[key] * 2;
    } else {
      totalScore += meet[key];
    }
  }
  let avgScore = totalScore / Object.keys(meet).length;
  console.log(totalScore / Object.keys(meet).length);
  return avgScore <= 5 ? "Get Out Now!" : "Nice Work Champ!";
}
//</1>
