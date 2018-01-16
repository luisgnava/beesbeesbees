var HoneyMakerBee = function() {
  this.age = 10;
  this.color = 'yellow';
  this.food = 'jelly';
  this.job = 'make honey';
  this.honeyPot = 0;
};
HoneyMakerBee.prototype.eat = function() {};
HoneyMakerBee.prototype.makeHoney = function() {
  if (this.honeyPot == 0) {
    this.honeyPot++;
  }
  HoneyMakerBee.prototype.giveHoney = function() {
    if (this.honeyPot > 3) {
      this.honeyPot--;
    }
    return makeHoney;
    return giveHoney;
  }
};