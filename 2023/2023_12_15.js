/* <1>  https://www.codewars.com/kata/656bb4c889b24ab51ac5ebcf/javascript
In ancient Greece, philosophers sought to unstring the mysteries of the universe in order to get a glimpse of the truth. They came up with an array of important ideas but most notably they came up with an idea that shaped our current civilization as we know it. They came up with democracy, "self-rule is fine" they said :)
Task

Write a function _ that outputs 'self-rule is fine' without using any letters a-zA-Z, numbers or hyphens '-' in your code.
Code limit

Your code is limited to 109 characters

It is possible to do it in 82 characters ;)

Easier version here: https://www.codewars.com/kata/65552e9756ea20197078a163

*/
//I couldn't figure out how to do it in under 109 characters, but I used jsFuck to get the
//desired return value.

_ = () =>
  [![] + []][+[]][+[] + !![] + !![] + !![]] +
  [![] + []][+[]][+[] + !![] + !![] + !![] + !![]] +
  [![] + []][+[]][+[] + !![] + !![]] +
  [![] + []][+[]][+[]] +
  (+(
    (+(
      +!+[] +
      [+!+[]] +
      (!![] + [])[!+[] + !+[] + !+[]] +
      [!+[] + !+[]] +
      [+[]]
    ) + [])[+!+[]] + [+[] + [+[]] + [+[]] + [+[]] + [+[]] + [+[]] + [+!+[]]]
  ) + [])[!+[] + !+[]] +
  [!![] + []][+[]][+[] + !![]] +
  [[][[]] + []][+[]][+[]] +
  [![] + []][+[]][+[] + !![] + !![]] +
  [![] + []][+[]][+[] + !![] + !![] + !![] + !![]] +
  " " +
  [[][[]] + []][+[]][+[] + !![] + !![] + !![] + !![] + !![]] +
  [![] + []][+[]][+[] + !![] + !![] + !![]] +
  " " +
  [![] + []][+[]][+[]] +
  [[][[]] + []][+[]][+[] + !![] + !![] + !![] + !![] + !![]] +
  [[][[]] + []][+[]][+[] + !![]] +
  [[][[]] + []][+[]][+[] + !![] + !![] + !![] + !![] + !![] + !![] + !![]];

//</1>
