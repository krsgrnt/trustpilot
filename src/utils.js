const crypto = require("crypto");

module.exports = {
  hashData: (data) => crypto.createHash("md5").update(data).digest("hex"),
  getLetters: (word) =>
    [...new Set(word.split(" ").join("").split(""))].sort().join(""),
  randomNumber: (max, min = 0) => Math.floor(Math.random() * (max - min) + min),
  msToMinutesAndSeconds: (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  },
  groupList: (list) => {
    const groupedList = {};
    list.forEach((word) => {
      if (groupedList[word.length]) {
        groupedList[word.length].push(word);
      } else {
        groupedList[word.length] = [word];
      }
    });
    return groupedList;
  },
};
