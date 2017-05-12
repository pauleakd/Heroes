var assert = require("assert");

var Hero = require("../hero.js");
var Food = require("../food.js");
var hero1;
var carrot
var mushroom;

beforeEach(function(){
  hero1 = new Hero({
    name: "Zardel",
    food: "Mushroom"
  })
  carrot = new Food({
    name: "Carrot",
    value: 5
  })
  mushroom = new Food({
    name:"Mushroom",
    value: 15
  })
})

describe("Hero", function(){
  it("Hero should have name, fav food and health", function(){
    assert.equal("Zardel", hero1.name)
    assert.equal("Mushroom", hero1.favorite_food)
    assert.equal(100, hero1.health)
  })
})

describe("Hero", function(){
  it("Eating food should increase health", function(){
    hero1.health = 70;
    hero1.eat(carrot)
    assert.equal(75, hero1.health)
  })
})

describe("Hero", function(){
  it("Health should not go over 100", function(){
    hero1.eat(carrot)
    assert.equal(100, hero1.health)
  })
})

describe("Hero", function(){
  it("Health should not go over 100", function(){
    hero1.eat(mushroom)
    assert.equal(100, hero1.health)
  })
})

describe("Hero", function(){
  it("Eating favorite food should double value added to health and not go over 100",
   function(){
    hero1.health = 50;
    hero1.eat(mushroom)
    assert.equal(80, hero1.health)
    hero1.eat(mushroom)
    assert.equal(100, hero1.health)
  })
})
