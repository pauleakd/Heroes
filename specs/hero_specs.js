var assert = require("assert");

var Hero = require("../hero.js");
var Food = require("../food.js");
var Quest = require("../quest.js")
var hero1;
var carrot
var mushroom;
var quest1
var quest2

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
  quest1 = new Quest({
    name:"Fight the dragon",
    urgency: 10
  })
  quest2 = new Quest({
    name:"Speak to the elves in Elwood forest",
    urgency: 5
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

describe("Hero", function(){
  it("Hero should be able to sort tasks by urgency", function(){
    hero1.addQuest(quest2);
    hero1.addQuest(quest1);
    hero1.sortQuestsbyUrgency();
    assert.equal(hero1.quests[0], quest1)
  })
})
