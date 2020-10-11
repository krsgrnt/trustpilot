const { randomNumber } = require("./utils");

const getRandomWord = (list, minWordLength) => {
  const wordGroupKeys = Object.keys(list).filter(
    (key) => parseInt(key, 10) >= minWordLength
  );
  const randomGroupIndex = randomNumber(wordGroupKeys.length);
  const groupKey = wordGroupKeys[randomGroupIndex];
  const randomWordIndex = randomNumber(list[groupKey].length);
  return list[groupKey][randomWordIndex];
};

const phraseBuilder = ({
  list,
  maxPhraseLength,
  minWordLength = 0,
  phrase = "",
}) => {
  const builtPhrase = phrase
    ? `${phrase} ${getRandomWord(list, minWordLength)}`
    : getRandomWord(list, minWordLength);

  if (builtPhrase.length === maxPhraseLength) {
    return builtPhrase;
  }
  if (builtPhrase.length < maxPhraseLength) {
    return phraseBuilder({
      list,
      maxPhraseLength,
      minWordLength,
      phrase: builtPhrase,
    });
  }
  return phraseBuilder({
    list,
    maxPhraseLength,
    minWordLength,
  });
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
