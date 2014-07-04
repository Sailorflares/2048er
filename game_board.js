function GameBoard(){
	this.game_tiles = [];
	for (var i=0; i<4; i++){
		this.game_tiles.push(new Array(4));
	}
}

GameBoard.prototype.addTile = function(tile,x,y){
	this.game_tiles[x][y] = tile;
};

GameBoard.prototype.getTile = function(x,y){
	return this.game_tiles[x][y];
};
