const mergeAlternately = (word1, word2) => {
  let i = 0;
  let j = 0;

  let res = [];

  while (i < word1.length && j < word2.length) {
    res.push(word1[i]);
    res.push(word2[j]);
    i++;
    j++;
  }

  res.push(word1.substring(i));
  res.push(word2.substring(j));

  return res.join("");
};

console.log(mergeAlternately("abc", "xyz"));
