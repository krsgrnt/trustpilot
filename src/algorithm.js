const { phraseBuilder, phraseVerifier } = require("./generate-phrase");
const {
  hashData,
  hashVerifier,
  getHashKey,
  msToMinutesAndSeconds,
} = require("./utils");

module.exports = (list, data) => {
  const now = Date.now();
  const cache = [];
  const report = {
    easy: {
      complete: false,
    },
    hard: {
      complete: false,
    },
    difficult: {
      complete: false,
    },
    total_phrases_generated: 0,
  };

  while (
    !report.easy.complete ||
    !report.hard.complete ||
    !report.difficult.complete
  ) {
    const phrase = phraseBuilder(list, data.anagram.length);
    if (phraseVerifier(phrase, data.anagram)) {
      if (!cache.includes(phrase)) {
        const hash = hashData(phrase);
        if (hashVerifier(hash, data)) {
          const hashKey = getHashKey(hash, data);
          if (!report[hashKey].complete) {
            report[hashKey] = {
              hash,
              phrase,
              elapsedTime: msToMinutesAndSeconds(Date.now() - now),
              count: cache.length,
              complete: true,
            };
            console.log(`Status update for ${hashKey}:`);
            console.log(report[hashKey]);
          }
        } else {
          cache.push(phrase);
        }
      }
    }
  }
  report.total_phrases_generated = cache.length;
  return report;
};
