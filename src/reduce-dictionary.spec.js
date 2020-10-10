const { firstPass, secondPass } = require("./reduce-dictionary");

describe("reduce-dictionary", () => {
  describe("first pass", () => {
    it("filters a dictionary for words only containing letters from a given string", () => {
      const testString = "ailnoprstuwy";
      const testWords = [
        "poultry",
        "outwits",
        "ants",
        "popularly",
        "zebedee",
        "zirconium",
      ];

      expect(firstPass(testWords, testString)).toEqual([
        "poultry",
        "outwits",
        "ants",
        "popularly",
      ]);
    });
  });

  describe("second pass", () => {
    it("filters a dictionary for words only using letters once from a given phrase", () => {
      const testString = "poultry outwits ants";
      const testWords = ["poultry", "outwits", "ants", "popularly"];

      expect(secondPass(testWords, testString)).toEqual([
        "poultry",
        "outwits",
        "ants",
      ]);
    });
  });
});
