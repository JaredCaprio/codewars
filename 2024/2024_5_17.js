/*  https://www.codewars.com/kata/527a6e602a7db3456e000a2b/train/javascript Extract Nested Object Reference
You are given a complex object that has many deeply nested variables. You don't want to go the usual if obj.property == null route. Create a prototype method that given a nested path, either return the value or undefined.

var obj = {
  person: {
    name: 'joe',
    history: {
      hometown: 'bratislava',
      bio: {
        funFact: 'I like fishing.'
      }
    }
  }
};

obj.hash('person.name'); // 'joe'
obj.hash('person.history.bio'); // { funFact: 'I like fishing.' }
obj.hash('person.history.homeStreet'); // undefined
obj.hash('person.animal.pet.needNoseAntEater'); // undefined
*/

Object.prototype.hash = function (string) {
	let current = this;
	const selector = string.split('.');

	for (prop of selector) {
		if (current[prop]) current = current[prop];
		else {
			return undefined;
		}
	}
	return current;
};
