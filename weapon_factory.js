var Weapon = require('./weapon.js')

var WeaponFactory = function(){
  var random = function(array){
    return array[Math.floor(Math.random()* (array.length-1))]
  }

  var types = ["Melee", "Magic", "Ranged"]
  var meleeNames = ["Fire Sword", "Dragon Bone", "Ice Dagger"]
  var magicNames = ["Fire Staff", "Ice wand"]
  var attacks = [10, 30, 50, 60]

  var generateWeapon = function(){
    var randtype = random(types)
    var randname
    if(randtype == "Melee"){
      randname = random(meleeNames)
    }
    else if(randtype == "Magic"){
      randname = random(magicNames)
    }
    var randattack = random(attacks)
    return new Weapon({
      name: randname,
      type: randtype,
      attack: randattack
    })
  }
  return generateWeapon();
}

module.exports = WeaponFactory
