test( "board filled with zeros", function() {
	var array = intializeBoard();

	for (i=0; i<array.length; i++) {
		for (j=0; j<array[i].length; j++) {
			equal( array[i][j], 0, "Value at board spot (" + i + "," + j + ") should equal 0" );
		}
	}
});

test( "shift values left by one space, starting at index 0 on the first row", function() {
	var array1 = [0,2,0,2];
	var array2 = [0,0,2,2];
	var array3 = [2,0,2,0];
	var array4 = [2,0,0,0];
	var array = [array1,array2,array3,array4];

	var result = shiftValuesLeftByOneSpace(array, 0, 0);
	
	deepEqual ( result, [[2,0,2,0],[0,0,2,2],[2,0,2,0],[2,0,0,0]], "See test" );
});

test( "shift values left by one space, starting at index 1 on the third row", function() {
	var array1 = [0,2,0,2];
	var array2 = [0,0,2,2];
	var array3 = [2,0,2,0];
	var array4 = [2,0,0,0];
	var array = [array1,array2,array3,array4];

	var result = shiftValuesLeftByOneSpace(array, 2, 1);
	
	deepEqual ( result, [[0,2,0,2],[0,0,2,2],[2,2,0,0],[2,0,0,0]], "See test" );
});

test( "shift values right by one space, starting at index 2 on the first row and index 3 on 4th row", function() {
	var array1 = [0,2,0,2];
	var array2 = [0,0,2,2];
	var array3 = [2,0,2,0];
	var array4 = [2,0,0,0];
	var array = [array1,array2,array3,array4];

	var result = shiftValuesRightByOneSpace(array, 0, 2);
	result = shiftValuesRightByOneSpace(result,3,3);
	
	deepEqual ( result, [[0,0,2,2],[0,0,2,2],[2,0,2,0],[0,2,0,0]], "See test" );
});

test( "shift values up by one space, starting at index 1 on the second column", function() {
	var array1 = [0,2,0,2];
	var array2 = [0,0,2,2];
	var array3 = [2,2,2,0];
	var array4 = [2,0,0,0];
	var array = [array1,array2,array3,array4];

	var result = shiftValuesUpByOneSpace(array, 1, 1);
	
	deepEqual ( result, [[0,2,0,2],[0,2,2,2],[2,0,2,0],[2,0,0,0]], "See test" );
});

test( "shift values down by one space, starting at index 2 on last column and index 3 on 3rd column", function() {
	var array1 = [0,2,0,2];
	var array2 = [0,0,2,2];
	var array3 = [2,0,2,0];
	var array4 = [2,0,0,0];
	var array = [array1,array2,array3,array4];

	var result = shiftValuesDownByOneSpace(array,2,3);
	result = shiftValuesDownByOneSpace(result,3,2);
	
	deepEqual ( result, [[0,2,0,0],[0,0,0,2],[2,0,2,2],[2,0,2,0]], "See test" );
});

test( "move all nonzero values to the left", function() {
	var array1 = [0,2,0,2];
	var array2 = [0,0,2,2];
	var array3 = [2,0,2,0];
	var array4 = [2,2,2,2];
	var array = [array1,array2,array3,array4];

	var result = moveNonZeroValuesToLeft(array);
	
	deepEqual ( result, [[2,2,0,0],[2,2,0,0],[2,2,0,0],[2,2,2,2]], "See test" );
});

test( "move all nonzero values up", function() {
	var array1 = [0,2,0,2];
	var array2 = [0,0,0,2];
	var array3 = [2,0,2,0];
	var array4 = [2,4,0,0];
	var array = [array1,array2,array3,array4];

	var result = moveNonZeroValuesUp(array);
	
	deepEqual ( result, [[2,2,2,2],[2,4,0,2],[0,0,0,0],[0,0,0,0]], "See test" );
});

test( "move all nonzero values to the right", function() {
	var array1 = [0,2,0,2];
	var array2 = [0,0,2,2];
	var array3 = [2,0,2,0];
	var array4 = [2,0,0,0];
	var array = [array1,array2,array3,array4];

	var result = moveNonZeroValuesToRight(array);
	
	deepEqual ( result, [[0,0,2,2],[0,0,2,2],[0,0,2,2],[0,0,0,2]], "See test" );
});

test( "move all nonzero values down", function() {
	var array1 = [0,2,0,2];
	var array2 = [0,0,0,2];
	var array3 = [2,0,2,0];
	var array4 = [2,4,0,0];
	var array = [array1,array2,array3,array4];

	var result = moveNonZeroValuesDown(array);
	
	deepEqual ( result, [[0,0,0,0],[0,0,0,0],[2,2,0,2],[2,4,2,2]], "See test" );
});

test( "shift values left 2 times, starting at first spot", function() {
	var array1 = [0,0,2,2];
	var array2 = [2,0,2,0];
	var array = [array1, array2];

	var result = shiftValuesLeftByGivenNumber(array, 0, 0, 2);
	
	deepEqual ( result, [[2,2,0,0],[2,0,2,0]], "See test" );

	var result = shiftValuesLeftByGivenNumber(array, 0, 0, 0);
	
	deepEqual ( result, [[2,2,0,0],[2,0,2,0]], "See test" );	
});

test( "shift values right 2 times, first array, index 3. shift values right once, second array, index 2", function() {
	var array1 = [2,2,0,0];
	var array2 = [2,2,0,2];
	var array = [array1, array2];

	var result = shiftValuesRightByGivenNumber(array, 0, 3, 2);
	result = shiftValuesRightByGivenNumber(result,1,2,1)
	
	deepEqual ( result, [[0,0,2,2],[0,2,2,2]], "See test" );
});

test( "shift values up 2 times, starting at first spot", function() {
	var array1 = [0,2,0,2];
	var array2 = [0,0,2,2];
	var array3 = [2,0,2,0];
	var array4 = [2,0,0,0];
	var array = [array1,array2,array3,array4];

	var result = shiftValuesUpByGivenNumber(array, 0, 0, 2);
	
	deepEqual ( result, [[2,2,0,2],[2,0,2,2],[0,0,2,0],[0,0,0,0]], "See test" );
});

test( "shift values down 2 times, starting at 4th spot in 4th column", function() {
	var array1 = [0,2,0,2];
	var array2 = [0,0,2,2];
	var array3 = [2,0,2,0];
	var array4 = [2,0,0,0];
	var array = [array1,array2,array3,array4];

	var result = shiftValuesDownByGivenNumber(array, 3, 3, 2);
	
	deepEqual ( result, [[0,2,0,0],[0,0,2,0],[2,0,2,2],[2,0,0,2]], "See test" );
});


test( "shift values left 1 time, starting at second spot", function() {
	var array1 = [0,0,2,2];
	var array2 = [2,0,2,0];
	var array = [array1, array2];

	var result = shiftValuesLeftByGivenNumber(array, 0, 1, 1);
	
	deepEqual ( result, [[0,2,2,0],[2,0,2,0]], "See test" );
});

test( "shift values left 1 time, starting at second spot in second array", function() {
	var array1 = [0,0,2,2];
	var array2 = [2,0,2,0];
	var array = [array1, array2];

	var result = shiftValuesLeftByGivenNumber(array, 1, 1, 1);
	
	deepEqual ( result, [[0,0,2,2,],[2,2,0,0]], "See test" );
});

test( "For each row, add if two equal adjacent values and shift rest of row left", function() {
	var array1 = [2,2,0,0];
	var array2 = [4,4,4,2];
	var array3 = [2,0,0,0];
	var array4 = [2,4,0,0];
	var array = [array1,array2,array3,array4];

	var result = addAdjacentValuesAndShiftLeft(array);
	
	deepEqual (result,[[4,0,0,0],[8,4,2,0],[2,0,0,0],[2,4,0,0]], "See test" );
});

test( "For each row, add if two equal adjacent values and shift rest of row up", function() {
	var array1 = [2,2,4,4];
	var array2 = [4,4,4,2];
	var array3 = [2,4,0,0];
	var array4 = [2,0,0,0];
	var array = [array1,array2,array3,array4];

	var result = addAdjacentValuesAndShiftUp(array);
	
	deepEqual (result,[[2,2,8,4],[4,8,0,2],[4,0,0,0],[0,0,0,0]], "See test" );
});

test( "For each row, add if two equal adjacent values and shift rest of row down", function() {
	var array4 = [2,2,4,4];
	var array3 = [4,4,4,2];
	var array2 = [2,4,0,0];
	var array1 = [2,0,0,0];
	var array = [array1,array2,array3,array4];

	var result = addAdjacentValuesAndShiftDown(array);
	
	deepEqual (result,[[0,0,0,0],[4,0,0,0],[4,8,0,2],[2,2,8,4]], "See test" );
});

test( "For each row, add if two equal adjacent values and shift rest of row right", function() {
	var array1 = [0,0,2,2];
	var array2 = [4,4,4,2];
	var array3 = [0,0,0,2];
	var array4 = [0,2,4,4];
	var array = [array1,array2,array3,array4];

	var result = addAdjacentValuesAndShiftRight(array);
	
	deepEqual (result,[[0,0,0,4],[0,4,8,2],[0,0,0,2],[0,0,2,8]], "See test" );
});

test( "Create an array to store locations of empty spaces", function() {
	var array1 = [2,2,0,0];
	var array2 = [4,4,4,2];
	var array3 = [2,0,0,0];
	var array4 = [2,4,0,0];
	var array = [array1,array2,array3,array4];

	var result = createArrayToStoreLocationsOfEmptySpaces(array);
	var expected = [[0,2],[0,3],[2,1],[2,2],[2,3],[3,2],[3,3]];

	deepEqual (result,expected,"See test");
});

test( "Return array of empty spaces when there are none", function() {
	var array1 = [2,2,2,2];
	var array2 = [4,4,4,2];
	var array3 = [2,4,4,2];
	var array4 = [2,4,4,2];
	var array = [array1,array2,array3,array4];

	var result = createArrayToStoreLocationsOfEmptySpaces(array);
	var expected = [];

	deepEqual (result,expected,"See test");
});

module( "Math.random returns 1", {
    setup: function () {
      sinon.stub(Math,'random').returns(1);
    },

    teardown: function () {
      Math.random.restore();
    }
});

test( "Place two in random, empty spots", function() {
	var array1 = [2,2,0,0];
	var array2 = [4,4,4,2];
	var array3 = [2,0,0,0];
	var array4 = [2,4,0,0];
	var array = [array1,array2,array3,array4];

	var result = placeTwoInEmptySpot(array);
	
	deepEqual ( result, [[2,2,0,0],[4,4,4,2],[2,0,0,0],[2,4,0,2]], "See test" );
});

test( "Creates game tile", function() {
	var gameTile = new GameTile(2);
	
	equal(gameTile.getValue(),2,"Value equals 2" );
});

test( "Creates game board and add tile", function() {
	var gameBoard = new GameBoard();
	var gameTile = new GameTile(2);
	gameBoard.addTile(gameTile,0,0);
	
	deepEqual(gameBoard.getTile(0,0),gameTile,"Board contains appropriate tile")
});