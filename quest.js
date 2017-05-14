var WeaponFactory = require("./weapon_factory")


var Quest = function(params) {
  this.name = params.name
  this.urgency = params.urgency
  this.completed = false
  this.reward = WeaponFactory();
  this.beast = params.beast
}

module.exports = Quest
