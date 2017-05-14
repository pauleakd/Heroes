var assert = require('assert')

var Weapon = require("../weapon.js")
var WeaponFactory = require("../weapon_factory")

describe("Weapon", function(){
    var sword
  beforeEach(function(){
     sword = new Weapon({
       attack: 10,
       type: "Melee",
       name: "Fire Sword"
     })
  })

  it("Weapon should have attack, type and name", function(){
    assert.equal("Fire Sword", sword.name)
    assert.equal("Melee", sword.type)
    assert.equal(10, sword.attack)
  })

  it("Test weapon factory", function(){
    var weapon2 = WeaponFactory();
    // console.log(weapon2)
  })
})
