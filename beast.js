var Beast = function(params){
  this.name = params.name
  this.attack = params.attack
  this.health = params.health
}

Beast.prototype = {
  beAttacked: function(number){
    this.health -= number;
    if (this.health > 0){
    return this.attack
    }
    else {
      console.log("The beast is defeated")
      return null;}
}
}
module.exports = Beast
