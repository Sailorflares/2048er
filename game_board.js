function GameBoard(){
	this.game_tiles = [];
}

GameBoard.prototype.addTile = function(tile){
	this.game_tiles.push(tile);
};

GameBoard.prototype.getTiles = function(){
	return this.game_tiles;
};
