/* <1> https://www.codewars.com/kata/5168b125faced29f66000005/train/javascript
Complete the solution so that it returns the number of times the search_text is found within the full_text. Overlap is not permitted : "aaa" contains 1 instance of "aa", not 2.

Usage example:

full_text = "aa_bb_cc_dd_bb_e", search_text = "bb"
    ---> should return 2 since "bb" shows up twice


full_text = "aaabbbcccc", search_text = "bbb"
    ---> should return 1
*/

function solution(fullText, searchText) {
  let regex = new RegExp(searchText, "g");

  let results = fullText.match(regex);

  return results ? results.length : 0;
}
//</1>
