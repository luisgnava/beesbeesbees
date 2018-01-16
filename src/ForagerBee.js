var ForagerBee = function() {
  this.age = 10;
  this.color = 'yellow';
  this.food = 'jelly';
  this.job = 'find pollen';
  this.canFly = true;
  this.treasureChest = [];
};
ForagerBee.prototype.eat = function() {};
//function should add a value inside treasure chest array
ForagerBee.prototype.forage = function(treasure) {
  this.treasureChest.push(treasure);

};