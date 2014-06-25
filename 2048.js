var printBoard = function(array) {
  var stringyString = "";
  for (i=0; i<4; i++){
    for (j=0; j<4; j++){
      stringyString = stringyString + " " + array[i][j];
    }
    stringyString = stringyString + "\n";
  }
  console.log(stringyString);
}

var intializeBoard = function() {
  var playerBoard = [ [ 0,0,0,0 ],[ 0,0,0,0 ],[ 0,0,0,0 ],[ 0,0,0,0 ] ];
  return playerBoard;
}

var setRandomSpotToTwo = function(array) {
  var i = Math.round(Math.random()*3);
  var j = Math.round(Math.random()*3);
  array[i][j] = 2;
}

var shiftValuesLeftByOneSpace = function(array,i,j) {
  for (j; j<3; j++){
    array[i][j] = array[i][j+1];
  }
  array[i][3] = 0;
  return array;
}

var shiftValuesLeftByGivenNumber = function(array,i,j,count){
  for (l=0; l<count; l++){
    array = shiftValuesLeftByOneSpace(array,i,j);
  }
  return array;
}

var moveNonZeroValuesToLeft = function(array){
  for (i=0; i<array.length; i++){
    for (j=0; j<array.length; j++){
      if (array[i][j]==0){
        var count=1;
        for (k=j+1; k<array.length; k++){
          if (array[i][k]==0){
            count++;          
          }
          else{
            k=array.length;
          } 
        }
        array = shiftValuesLeftByGivenNumber(array,i,j,count);
      }  
    }
  } 
  return array;
}

var addAdjacentValuesAndShift = function(array){
  for (i=0; i<array.length; i++){
    var j = 0;
    var addition = 0;
    while (j<array.length && addition<1){
      if (array[i][j]==array[i][j+1]){
        array[i][j]+=array[i][j+1];
        array = shiftValuesLeftByOneSpace(array,i,j+1);
        addition++;
      }
      j++;
    }
  }
  return array;
}