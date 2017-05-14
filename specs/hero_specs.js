var assert = require("assert");


describe("Hero", function(){
var Hero = require("../hero.js");
var Food = require("../food.js");
var Quest = require("../quest.js")
var WeaponFactory = require("../weapon_factory")
var Weapon = require("../weapon.js")
var Beast = require("../beast.js")


var hero1;
var carrot
var mushroom;
var quest1
var quest2
var weapon1
var weapon2
var weapon3
var weapon4
var weapon5
var rat
var dragon

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
    urgency: 10,
    beast: dragon
  })
  quest2 = new Quest({
    name:"Speak to the elves in Elwood forest",
    urgency: 5
  })
  quest3 = new Quest({
    name:"Fight the rat",
    urgency: 20,
    beast: rat

  })
  weapon1 = new Weapon({
    name: "Ice Rod",
    type:"Magic",
    attack: 5
  });
  weapon2 = new WeaponFactory()
  weapon3 = new WeaponFactory()
  weapon4 = new WeaponFactory()
  weapon5 = new WeaponFactory()
  rat = new Beast({
    name: "Rat",
    attack: 1,
    health: 30
  })
  dragon = new Beast({
    name: "Dragon",
    attack: 40,
    health: 200
  })
})

  it("Hero should have name, fav food and health", function(){
    assert.equal("Zardel", hero1.name)
    assert.equal("Mushroom", hero1.favorite_food)
    assert.equal(100, hero1.health)
  })

  it("Eating food should increase health", function(){
    hero1.health = 70;
    hero1.eat(carrot)
    assert.equal(75, hero1.health)
  })

  it("Health should not go over 100", function(){
    hero1.eat(carrot)
    assert.equal(100, hero1.health)
  })

  it("Health should not go over 100", function(){
    hero1.eat(mushroom)
    assert.equal(100, hero1.health)
  })

  it("Eating favorite food should double value added to health and not go over 100",
   function(){
    hero1.health = 50;
    hero1.eat(mushroom)
    assert.equal(80, hero1.health)
    hero1.eat(mushroom)
    assert.equal(100, hero1.health)
  })

  it("Hero should be able to sort tasks by urgency", function(){
    hero1.addQuest(quest2);
    hero1.addQuest(quest1);
    hero1.sortQuestsbyUrgency();
    assert.equal(hero1.quests[0], quest1)
  })
  it("hero should be able to select a weapon", function(){
    hero1.addWeapon(weapon1)
    hero1.addWeapon(weapon2)
    hero1.setActiveWeapon(0)
    assert.deepEqual(weapon1, hero1.activeWeapon)
  })

  it("hero should be able to sort weapons by attack", function(){
    hero1.addWeapon(weapon1)
    hero1.addWeapon(weapon2)
    hero1.addWeapon(weapon3)
    hero1.addWeapon(weapon4)
    hero1.addWeapon(weapon5)
    console.log(hero1.weapons)
    hero1.sortWeaponsByAttack()
    console.log(hero1.weapons)
    assert.deepEqual(weapon1, hero1.weapons[4])
  })
  it("hero should be able to attack", function(){
    hero1.addWeapon(weapon1)
    hero1.setActiveWeapon(0)
    assert.equal(15, hero1.attack())
  })
  it("hero should be able to defeat rat", function(){
    hero1.addWeapon(weapon3)
    hero1.setActiveWeapon(0)
    hero1.fightBeast(rat)
    console.log("this is the hero's health" + hero1.health)
    assert.equal(true, hero1.health > 0)
    assert.equal(true, rat.health <= 0)
  })

  it("hero should lose against dragon", function(){
    hero1.addWeapon(weapon3)
    hero1.setActiveWeapon(0)
    hero1.fightBeast(dragon)
    console.log("this is the hero's health" + hero1.health)
    assert.equal(true, hero1.health <= 0)
    assert.equal(true, dragon.health > 0)
  })
  it("hero should be able to complete quest", function(){
    hero1.addWeapon(weapon3)
    hero1.setActiveWeapon(0)
    hero1.addQuest(quest3)
    hero1.completeQuest(hero1.quests[0])
    assert.equal(true, hero1.quests[0].completed)
    assert.equal(2, hero1.weapons.length)
  })
  it("hero should be able to fail quest", function(){
    hero1.addWeapon(weapon3)
    hero1.setActiveWeapon(0)
    hero1.addQuest(quest1)
    hero1.completeQuest(hero1.quests[0])
    assert.equal(false, hero1.quests[0].completed)
    assert.equal(1, hero1.weapons.length)
  })

})
