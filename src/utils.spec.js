const {
  hashData,
  hashVerifier,
  getHashKey,
  getLetters,
  randomNumber,
  msToMinutesAndSeconds,
} = require("./utils");

describe("utils", () => {
  const testData = {
    easy: "e4820b45d2277f3844eac66c903e84be",
    hard: "23170acc097c24edb98fc5488ab033fe",
    difficult: "665e5bcb0c20062fe8abaaf4628bb154",
  };

  describe("hashData", () => {
    it("hashes a given string with MD5", () => {
      const testString = "poultry outwits ants";
      expect(hashData(testString)).toEqual("8b35bbd7ff2f5dd7c94fffbb1a3512bc");
    });
  });

  describe("hashVerifier", () => {
    it("compares a hash against a list of hashes", () => {
      const { easy, hard, difficult } = testData;
      expect(hashVerifier(easy, testData)).toEqual(true);
      expect(hashVerifier(hard, testData)).toEqual(true);
      expect(hashVerifier(difficult, testData)).toEqual(true);
      expect(hashVerifier("some hash", testData)).toEqual(false);
    });
  });

  describe("getHashKey", () => {
    it("returns the key for a given hash", () => {
      expect(getHashKey("e4820b45d2277f3844eac66c903e84be", testData)).toEqual(
        "easy"
      );
      expect(getHashKey("23170acc097c24edb98fc5488ab033fe", testData)).toEqual(
        "hard"
      );
      expect(getHashKey("665e5bcb0c20062fe8abaaf4628bb154", testData)).toEqual(
        "difficult"
      );
    });
  });

  describe("getLetters", () => {
    it("returns unique letters from a given string sorted alphabetically", () => {
      const testString = "poultry outwits ants";
      expect(getLetters(testString)).toEqual("ailnoprstuwy");
    });
  });

  describe("randomNumber", () => {
    it("returns an integer between 0 and 10", () => {
      const testNumber = randomNumber(10);
      expect(testNumber).toBeGreaterThanOrEqual(0);
      expect(testNumber).toBeLessThanOrEqual(10);
    });

    it("returns an integer between 1 and 5", () => {
      const testNumber = randomNumber(5, 1);
      expect(testNumber).toBeGreaterThanOrEqual(1);
      expect(testNumber).toBeLessThanOrEqual(5);
    });
  });

  describe("msToMinutesAndSeconds", () => {
    it("returns minutes and seconds for a given number of milliseconds", () => {
      expect(msToMinutesAndSeconds(300000)).toEqual("5:00");
    });
  });
});
