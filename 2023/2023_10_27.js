/* <1> https://www.codewars.com/kata/55a3cb91d1c9ecaa2900001b/train/javascript
You have been employed by the Japanese government to write a function that tests whether or not a building is strong enough to withstand a simulated earthquake.

A building will fall if the magnitude of the earthquake is greater than the strength of the building.

An earthquake takes the form of a 2D-Array. Each element within the Outer-Array represents a shockwave, and each element within the Inner-Arrays represents a tremor. The magnitude of the earthquake is determined by the product of the values of its shockwaves. A shockwave is equal to the sum of the values of its tremors.

Example earthquake --> [[5,3,7],[3,3,1],[4,1,2]] ((5+3+7) * (3+3+1) * (4+1+2)) = 735

A building begins with a strength value of 1000 when first built, but this value is subject to exponential decay of 1% per year. For more info on exponential decay, follow this link - https://en.wikipedia.org/wiki/Exponential_decay

Given an earthquake and the age of a building, write a function that returns "Safe!" if the building is strong enough, or "Needs Reinforcement!" if it falls.
*/

function strongEnough(earthquake, age) {
  //calculate the total impact of the earthquake
  //sum up each inner array and then multiple them together
  let totalImpact = earthquake.reduce(
    (acc, inArr) => acc * inArr.reduce((sum, curr) => sum + curr, 0),
    1
  );

  //calculate the current strength of the building
  let startingStr = 1000;
  let currStr = startingStr * (1 - age / 100);
  //if current strength of building is less than total impact of earthquake
  //then return "Needs Reinforcement!" else return "Safe!"

  return currStr >= totalImpact ? "Safe!" : "Needs Reinforcement!";
}

//</1>
