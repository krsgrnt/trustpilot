/* eslint-disable no-console */
const createDictionary = require("./create-dictionary");
const { firstPass, secondPass } = require("./reduce-dictionary");
const runAlgorithm = require("./algorithm");

const data = {
  anagram: "poultry outwits ants",
  easy: "e4820b45d2277f3844eac66c903e84be",
  hard: "23170acc097c24edb98fc5488ab033fe",
  difficult: "665e5bcb0c20062fe8abaaf4628bb154",
};

(async () => {
  const dictionary = await createDictionary();
  const list = secondPass(firstPass(dictionary, data.anagram), data.anagram);
  console.log(
    `Using a dictionary of ${list.length} words to generate phrases...`
  );
  const report = runAlgorithm(list, data);
  console.log("Complete!");
  console.log(report);
})();
