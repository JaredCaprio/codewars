/* <1> https://www.codewars.com/kata/62ad72443809a4006998218a/train/javascript
Story

YouTube had a like and a dislike button, which allowed users to express their opinions about particular content. It was set up in such a way that you cannot like and dislike a video at the same time. There are two other interesting rules to be noted about the interface: Pressing a button, which is already active, will undo your press. If you press the like button after pressing the dislike button, the like button overwrites the previous "Dislike" state. The same is true for the other way round.
Task

Create a function that takes in a list of button inputs and returns the final state.
Examples

likeOrDislike([Dislike]) => Dislike
likeOrDislike([Like,Like]) => Nothing
likeOrDislike([Dislike,Like]) => Like
likeOrDislike([Like,Dislike,Dislike]) => Nothing

Notes

    If no button is currently active, return Nothing.
    If the list is empty, return Nothing.

*/

//create a function that takes in an array of strings.  No numbers, No special characters, no whitespace
//or empty strings being passed in
//return final state of the like/dislike button.

function likeOrDislike(buttons) {
  //create a current state variable
  let curState = "Nothing";
  //loop over the array updating the state var each iteration
  for (let i = 0; i < buttons.length; i++) {
    if (curState !== buttons[i]) {
      curState = buttons[i];
    } else {
      curState = "Nothing";
    }
  }

  //return state var
  return curState;
}
//</1>

//test cases
console.log(
  likeOrDislike(["like", "dislike", "dislike", "dislike", "dislike"])
);
console.log(likeOrDislike(["like", "like"]));
