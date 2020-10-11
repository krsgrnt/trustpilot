const getAlgorithm = require("./algorithm");

describe("algorithm", () => {
  const list = {
    3: ["out", "put"],
    4: ["alpo"],
    5: ["inlaw", "rutty", "atony"],
    6: ["twirls", "tryout"],
    7: ["outputs"],
    8: ["outposts", "untwists"],
  };

  it("calculates the phrase with a minimum word length", () => {
    const anagram = "poultry outwits ants";
    const hash = "3c3e7d5fb65ffd6da9acb8d3f198540b";
    const report = getAlgorithm({ list, anagram, hash, minWordLength: 5 });
    expect(report).toEqual({
      anagram,
      hash,
      phrase: "inlaw outposts rutty",
      elapsedTime: expect.anything(),
      count: expect.anything(),
      complete: true,
    });
  });

  it("calculates the phrase with no minimum word length", () => {
    const anagram = "poultry outwits ants";
    const hash = "a0f8625ca9c0b249839b2d5191df20c0";
    const report = getAlgorithm({ list, anagram, hash });
    expect(report).toEqual({
      anagram,
      hash,
      phrase: "alpo tryout untwists",
      elapsedTime: expect.anything(),
      count: expect.anything(),
      complete: true,
    });
  });
});
