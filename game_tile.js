function GameTile (value){
	this.value = value;
	this.locked = false;
}

GameTile.prototype.getValue = function() {
	return this.value;
};

GameTile.prototype.setValue = function(value) {
	this.value = value;
};

GameTile.prototype.lock = function() {
	this.locked = true;
};

GameTile.prototype.unlock = function() {
	this.locked = false;
};