var Hero = function(params){
  this.name = params.name;
  this.health = 100;
  this.favorite_food = params.food;
  this.quests = [];
  this.skills = {
    magic: 0,
    fighting: 0,
  }
}

Hero.prototype = {
  talk: function(){
    console.log("I am a hero! My name is " + this.name);
  },
  eat: function(food){
    var multiplier

    (food.name == this.favorite_food) ? multiplier = 2 : multiplier = 1

      if (this.health + food.value * multiplier <= 100){
        this.health += food.value * multiplier
      }
      else {
        this.health = 100;
      }
    }
}
module.exports = Hero;
