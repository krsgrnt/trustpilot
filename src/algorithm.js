const { phraseBuilder, phraseVerifier } = require("./generate-phrase");
const { hashData, msToMinutesAndSeconds } = require("./utils");

module.exports = ({ list, anagram, hash, minWordLength = false }) => {
  const startTime = Date.now();
  const cache = [];
  const report = {
    hash,
    anagram,
    phrase: "",
    complete: false,
    elapsedTime: "",
    count: 0,
  };

  while (!report.complete) {
    const phrase = phraseBuilder({
      list,
      maxPhraseLength: anagram.length,
      minWordLength,
    });
    if (phraseVerifier(phrase, anagram)) {
      if (!cache.includes(phrase)) {
        const phraseHash = hashData(phrase);
        if (phraseHash === hash) {
          report.phrase = phrase;
          report.elapsedTime = msToMinutesAndSeconds(Date.now() - startTime);
          report.count = cache.length;
          report.complete = true;
        } else {
          cache.push(phrase);
        }
      }
    }
  }
  return report;
};
