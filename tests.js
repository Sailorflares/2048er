test( "two numbers placed randomly", function() {
	sinon.stub( Math, 'random' ).returns(0);
	var array = [ [],[],[],[] ];
	array[0][0] = "Blank";
	
	setRandomSpotToTwo(array);

	equal( array[0][0], 2, "Value at array[0][0] should be 2" );
});

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

test( "move all nonzero values to the left", function() {
	var array1 = [0,2,0,2];
	var array2 = [0,0,2,2];
	var array3 = [2,0,2,0];
	var array4 = [2,0,0,0];
	var array = [array1,array2,array3,array4];

	var result = moveNonZeroValuesToLeft(array);
	
	deepEqual ( result, [[2,2,0,0],[2,2,0,0],[2,2,0,0],[2,0,0,0]], "See test" );
});

test( "shift values left 2 times, starting at first spot", function() {
	var array1 = [0,0,2,2];
	var array2 = [2,0,2,0];
	var array = [array1, array2];

	var result = shiftValuesLeftByGivenNumber(array, 0, 0, 2);
	
	deepEqual ( result, [[2,2,0,0],[2,0,2,0]], "See test" );
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

test( "For each row, add if two equal adjacent values and shift rest of row", function() {
	var array1 = [2,2,0,0];
	var array2 = [4,4,4,2];
	var array3 = [2,0,0,0];
	var array4 = [2,4,0,0];
	var array = [array1,array2,array3,array4];

	var result = addAdjacentValuesAndShift(array);
	
	deepEqual ( result, [[4,0,0,0],[8,4,2,0],[2,0,0,0],[2,4,0,0]], "See test" );
});