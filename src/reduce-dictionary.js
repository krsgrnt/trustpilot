const { getLetters } = require("./utils");

const firstPass = (dictionary, anagram) => {
  const letters = getLetters(anagram);
  const regex = new RegExp(`^[${letters}]+$`, "gi");
  return dictionary.filter((word) => word.match(regex));
};

const secondPass = (dictionary, phrase) => {
  return dictionary.filter((word) => {
    const phraseLetters = phrase.split(" ").join("").split("");
    const wordLetters = word.split(" ").join("").split("");
    let match = true;
    wordLetters.forEach((letter) => {
      if (phraseLetters.includes(letter)) {
        const index = phraseLetters.indexOf(letter);
        phraseLetters.splice(index, 1);
      } else {
        match = false;
      }
    });
    return match;
  });
};

module.exports = { firstPass, secondPass };
