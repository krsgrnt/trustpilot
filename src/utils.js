const crypto = require("crypto");

module.exports = {
  hashData: (data) => crypto.createHash("md5").update(data).digest("hex"),
  hashVerifier: (hash, { anagram, ...hashes }) =>
    Object.values(hashes).includes(hash),
  getHashKey: (hash, data) =>
    Object.keys(data).find((key) => data[key] === hash),
  getLetters: (word) =>
    [...new Set(word.split(" ").join("").split(""))].sort().join(""),
  randomNumber: (max, min = 0) => Math.floor(Math.random() * (max - min) + min),
  msToMinutesAndSeconds: (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  },
};
