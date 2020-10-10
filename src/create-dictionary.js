const fs = require("fs");
const readline = require("readline");

module.exports = () =>
  new Promise((resolve) => {
    const dictionary = [];
    const wordlistFileStream = fs.createReadStream("./resources/wordlist");
    const rl = readline.createInterface({ input: wordlistFileStream });
    rl.on("line", (line) => {
      dictionary.push(line);
    });
    rl.on("close", () => resolve([...new Set(dictionary)]));
  });
