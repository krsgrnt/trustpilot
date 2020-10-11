const {
  hashData,
  getLetters,
  randomNumber,
  msToMinutesAndSeconds,
  groupList,
} = require("./utils");

describe("utils", () => {
  describe("hashData", () => {
    it("hashes a given string with MD5", () => {
      const testString = "poultry outwits ants";
      expect(hashData(testString)).toEqual("8b35bbd7ff2f5dd7c94fffbb1a3512bc");
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
      expect(msToMinutesAndSeconds(10000)).toEqual("0:10");
    });
  });

  describe("groupList", () => {
    it("sorts words into groups by length", () => {
      const testWords = ["poultry", "outwits", "ants", "zebedee", "zirconium"];
      expect(groupList(testWords)).toEqual({
        4: ["ants"],
        7: ["poultry", "outwits", "zebedee"],
        9: ["zirconium"],
      });
    });
  });
});
