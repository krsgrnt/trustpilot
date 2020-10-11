const { phraseBuilder, phraseVerifier } = require("./generate-phrase");

const list = {
  3: ["out", "put"],
  4: ["alpo"],
  5: ["inlaw", "rutty", "atony"],
  6: ["twirls", "tryout"],
  7: ["outputs"],
  8: ["outposts", "untwists"],
};

describe("generate-phrase", () => {
  describe("phraseBuilder", () => {
    it("generates a random phrase from a list of words to a given length", () => {
      const maxPhraseLength = 20;

      expect(phraseBuilder({ list, maxPhraseLength }).length).toEqual(20);
      expect(
        phraseBuilder({ list, maxPhraseLength }).length
      ).not.toBeGreaterThanOrEqual(21);
      expect(
        phraseBuilder({ list, maxPhraseLength }).length
      ).not.toBeLessThanOrEqual(19);
    });

    it("generates a random phrase of a given length without words under a minimum length", () => {
      const maxPhraseLength = 20;
      const minWordLength = 5;

      const invalidWords = ["out", "put", "alpo"];
      const generatedPhrase = phraseBuilder({
        list,
        maxPhraseLength,
        minWordLength,
      });

      expect(
        invalidWords.some((word) => generatedPhrase.split(" ").includes(word))
      ).toBe(false);
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
