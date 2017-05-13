var Hero = function(params){
  this.name = params.name;
  this.health = 100;
  this.favorite_food = params.food;
  this.quests = [];
  this.skills = {
    magic: 10,
    melee: 10,
    ranged_attack: 10
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
  
}

module.exports = Hero;
