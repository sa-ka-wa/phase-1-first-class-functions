require("./helpers.js");

const chai = require("chai");
const spies = require("chai-spies");
chai.use(spies);

function receivesAFunction(callback) {
  callback();
}

describe("index", () => {
  describe("receivesAFunction(callback)", () => {
    it("receives a function and calls it", () => {
      const spy = chai.spy();

      receivesAFunction(spy);

      expect(spy).to.have.been.called();
    });
  });

  function returnsANamedFunction() {
    return function named() {};
  }

  describe("returnsANamedFunction()", () => {
    var fn;

    before(() => {
      fn = returnsANamedFunction();
    });

    it("returns a function", () => {
      expect(fn).to.be.a("function");
    });

    it("returns a named function", () => {
      expect(fn.name).not.to.eql("");
    });
  });

  function returnsAnAnonymousFunction() {
    return function () {};
  }

  describe("returnsAnAnonymousFunction()", () => {
    var fn;

    before(() => {
      fn = returnsAnAnonymousFunction();
    });

    it("returns a function", () => {
      expect(fn).to.be.a("function");
    });

    it("returns an anonymous function", () => {
      expect(fn.name).to.eql("");
    });
  });
});
