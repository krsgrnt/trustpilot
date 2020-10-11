/* eslint-disable no-console */
const createDictionary = require("./create-dictionary");
const { firstPass, secondPass } = require("./reduce-dictionary");
const runAlgorithm = require("./algorithm");
const { groupList } = require("./utils");

const anagram = "poultry outwits ants";
const hashes = {
  easy: "e4820b45d2277f3844eac66c903e84be",
  hard: "23170acc097c24edb98fc5488ab033fe",
  difficult: "665e5bcb0c20062fe8abaaf4628bb154",
};

(async () => {
  const dictionary = await createDictionary();
  const reducedDictionary = secondPass(firstPass(dictionary, anagram), anagram);
  const list = groupList(reducedDictionary);
  console.log(
    `Using a dictionary of ${reducedDictionary.length} words to generate phrases...`
  );
  const report = runAlgorithm({
    list,
    anagram,
    hash: hashes.easy, // hashes.hard, hashes.difficult
    minWordLength: 5, // false
  });
  console.log(report);
})();
