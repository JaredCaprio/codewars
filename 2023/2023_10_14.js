/*<1> https://www.codewars.com/kata/55a144eff5124e546400005a/javascript
Classy Classes

Basic Classes, this kata is mainly aimed at the new JS ES6 Update introducing classes
Task

Your task is to complete this Class, the Person class has been created. You must fill in the Constructor method to accept a name as string and an age as number, complete the get Info property and getInfo method/Info getter which should return johns age is 34

Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
*/
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.info = `${this.name} age is ${this.age}`;
  }

  getInfo() {
    return info;
  }
}
//</1>
