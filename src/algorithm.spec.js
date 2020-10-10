const getAlgorithm = require("./algorithm");

describe("algorithm", () => {
  const testData = {
    anagram: "poultry outwits ants",
    easy: "3c3e7d5fb65ffd6da9acb8d3f198540b",
    hard: "f20ab7f6ae6c3e4d0f179bf5d7abefa2",
    difficult: "a0f8625ca9c0b249839b2d5191df20c0",
  };
  const list = [
    "inlaw",
    "outposts",
    "rutty",
    "atony",
    "outputs",
    "twirls",
    "alpo",
    "tryout",
    "untwists",
  ];

  it("returns a report comprising the phrase and elapsed time", () => {
    const report = getAlgorithm(list, testData);
    const { easy, hard, difficult } = report;
    expect(easy).toEqual({
      hash: testData.easy,
      phrase: "inlaw outposts rutty",
      elapsedTime: expect.anything(),
      count: expect.anything(),
      complete: true,
    });
    expect(hard).toEqual({
      hash: testData.hard,
      phrase: "atony outputs twirls",
      elapsedTime: expect.anything(),
      count: expect.anything(),
      complete: true,
    });
    expect(difficult).toEqual({
      hash: testData.difficult,
      phrase: "alpo tryout untwists",
      elapsedTime: expect.anything(),
      count: expect.anything(),
      complete: true,
    });
    expect(report.total_phrases_generated).toEqual(
      Math.max(easy.count, hard.count, difficult.count)
    );
  });
});
