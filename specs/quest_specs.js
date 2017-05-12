var assert = require("assert");

var Quest = require("../quest.js");

var quest1;

beforeEach(function(){
  quest1 = new Quest({
    name: "Fight the dragon",
    urgency: 10
  })
})

describe("Quest", function(){
  it("Quest should have name and urgency", function(){
    assert.equal("Fight the dragon", quest1.name)
    assert.equal(10, quest1.urgency)
  })
})
