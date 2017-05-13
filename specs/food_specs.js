var assert = require("assert");

var Food = require("../food.js");


describe("Food", function(){
var food1;

beforeEach(function(){
  food1 = new Food({
    name: "Mushroom",
    value: 20
  })
})


  it("Food should have name and value", function(){
    assert.equal("Mushroom", food1.name)
    assert.equal(20, food1.value)
  })
})
