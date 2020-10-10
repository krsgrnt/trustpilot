const { phraseBuilder, phraseVerifier } = require("./generate-phrase");

const list = [
  "ant",
  "anti",
  "antis",
  "antitrust",
  "ants",
  "anuity",
  "anul",
  "anuls",
  "anus",
  "any",
  "aol",
  "aply",
  "apoint",
  "apoints",
  "apolo",
  "apolos",
  "aportion",
  "aportions",
  "apr",
  "april",
];

describe("generate-phrase", () => {
  describe("phraseBuilder", () => {
    it("generates a random phrase from a list of words to a given length", () => {
      const phraseLength = 20;

      expect(phraseBuilder(list, phraseLength).length).toEqual(20);
      expect(
        phraseBuilder(list, phraseLength).length
      ).not.toBeGreaterThanOrEqual(21);
      expect(phraseBuilder(list, phraseLength).length).not.toBeLessThanOrEqual(
        19
      );
    });
  });

  describe("phraseVerifier", () => {
    it("verifies a phrase only contains letters from the anagram", () => {
      const anagram = "poultry outwits ants";

      expect(phraseVerifier(anagram, "poultry outwits mice")).toEqual(false);
      expect(phraseVerifier(anagram, "trustpilot wants you")).toEqual(true);
    });
  });
});
