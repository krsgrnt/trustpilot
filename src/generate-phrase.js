const { randomNumber } = require("./utils");

const getRandomWord = (list) => {
  const randomIndex = randomNumber(list.length);
  return list[randomIndex];
};

const phraseBuilder = (list, length, phrase = "") => {
  const builtPhrase = phrase
    ? `${phrase} ${getRandomWord(list)}`
    : getRandomWord(list);

  if (builtPhrase.length === 20) {
    return builtPhrase;
  }
  if (builtPhrase.length < 20) {
    return phraseBuilder(list, length, builtPhrase);
  }
  return phraseBuilder(list, length);
};

const phraseVerifier = (phrase, anagram) => {
  const phraseLetters = phrase.split(" ").join("").split("");
  const anagramLetters = anagram.split(" ").join("").split("");

  let match = true;
  phraseLetters.forEach((letter) => {
    if (anagramLetters.includes(letter)) {
      const index = anagramLetters.indexOf(letter);
      anagramLetters.splice(index, 1);
    } else {
      match = false;
    }
  });

  return match;
};

module.exports = {
  phraseBuilder,
  phraseVerifier,
};
