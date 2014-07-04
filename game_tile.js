function GameTile (value,x,y){
	this.value = value;
	this.x = x;
	this.y = y;
	this.locked = false;
}

GameTile.prototype.getValue = function() {
	return this.value;
};

GameTile.prototype.setValue = function(value) {
	this.value = value;
};

GameTile.prototype.setX = function(x) {
	this.x = x;
};

GameTile.prototype.setY = function(y) {
	this.y = y;
};

GameTile.prototype.getX = function() {
	return this.x;
};

GameTile.prototype.getY = function() {
	return this.y;
};

GameTile.prototype.lock = function() {
	this.locked = true;
};

GameTile.prototype.unlock = function() {
	this.locked = false;
};