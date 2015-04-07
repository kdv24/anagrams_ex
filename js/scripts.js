function anagramFinder(word) {
  var legalWords = ["beard", "bared", "bored", "snorkel", "waffle", "etcetera"];
  var arrayToReturn = [];

  //split input word into array, sort, join back into string
  var word_array = word.split("");
  word_array.sort();
  word = word_array.join("");

  //for each word in legalWords: split, sort, join; compare to word input;
  //if equal, push to arrayToReturn
  for (var i = 0; i < legalWords.length; i++) {
    var tempWord = legalWords[i].split("");
    tempWord.sort();
    tempWord = tempWord.join("");

    
    if ((tempWord === word)) {
      arrayToReturn.push(legalWords[i]);
    }
  };
  return arrayToReturn;
};
