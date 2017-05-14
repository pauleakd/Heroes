var Hero = function(params){
  this.name = params.name;
  this.health = 100;
  this.favorite_food = params.food;
  this.quests = [];
  this.skills = {
    magic: 10,
    melee: 10
  }
  this.weapons = [];
  this.activeWeapon = null;
}

Hero.prototype = {
  talk: function(){
    console.log("I am a hero! My name is " + this.name);
  },
  addQuest(quest){
    this.quests.push(quest)
  },
  eat: function(food){
    if (food.value === undefined) {return};

    var multiplier
    (food.name == this.favorite_food) ? multiplier = 2 : multiplier = 1

      if (this.health + food.value * multiplier <= 100){
        this.health += food.value * multiplier
      }
      else {
        this.health = 100;
      }
    },
  sortQuestsbyUrgency: function(){
    this.quests.sort(function(a, b){
      return b.urgency - a.urgency
    })
  },
  addWeapon: function(item){
    this.weapons.push(item)
  },

  setActiveWeapon: function(index){
    this.activeWeapon = this.weapons[index]
  },

  sortWeaponsByAttack: function(){
    this.weapons = this.weapons.sort(function(a, b){
      return b.attack - a.attack
    })
  },
  attack: function(){
    var skillPoints
    if (this.activeWeapon.type == "Melee") {
      skillPoints = this.skills.melee
    }
    else if(this.activeWeapon.type == "Magic"){
      skillPoints = this.skills.magic
    }
    else skillPoints = 0;

    var attackPoints = this.activeWeapon.attack
    return skillPoints + attackPoints;

  }

}

module.exports = Hero;
