/* <1> https://www.codewars.com/kata/5701800886306a876a001031/train/javascript
Suzuki needs help lining up his students!

Today Suzuki will be interviewing his students to ensure they are progressing in their training. He decided to schedule the interviews based on the length of the students name in descending order. The students will line up and wait for their turn.

You will be given a string of student names. Sort them and return a list of names in descending order.

Here is an example input:

string = 'Tadashi Takahiro Takao Takashi Takayuki Takehiko Takeo Takeshi Takeshi'

Here is an example return from your function:
 lst = ['Takehiko',
        'Takayuki',
        'Takahiro',
        'Takeshi',
        'Takeshi',
        'Takashi',
        'Tadashi',
        'Takeo',
        'Takao']

Names of equal length will be returned in reverse alphabetical order (Z->A) such that:
string = "xxa xxb xxc xxd xa xb xc xd"

Returns
['xxd', 'xxc', 'xxb', 'xxa', 'xd', 'xc', 'xb', 'xa']
*/

function lineupStudents(students) {
  const studentsArr = students.split(" ");

  return studentsArr.sort((a, b) => {
    if (b.length === a.length) {
      return b.localeCompare(a);
    } else {
      return b.length - a.length;
    }
  });
}
//</1>
