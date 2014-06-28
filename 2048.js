var printBoard = function(array) {
  var stringyString = "";
  for (i=0; i<array.length; i++){
    for (j=0; j<array.length; j++){
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

var shiftValuesLeftByOneSpace = function(array,i,j) {
  for (j; j<3; j++){
    array[i][j] = array[i][j+1];
  }
  array[i][3] = 0;
  return array;
}

var shiftValuesRightByOneSpace = function(array,i,j) {
  for (j; j>-1; j--){
    array[i][j] = array[i][j-1];
  }
  array[i][0] = 0;
  return array;
}

var shiftValuesUpByOneSpace = function(array,i,j) {
  for (i; i<3; i++){
    array[i][j] = array[i+1][j];
  }
  array[3][j] = 0;
  return array;
}

var shiftValuesLeftByGivenNumber = function(array,i,j,count){
  for (l=0; l<count; l++){
    array = shiftValuesLeftByOneSpace(array,i,j);
  }
  return array;
}

var shiftValuesRightByGivenNumber = function(array,i,j,count){
  for (l=0; l<count; l++){
    array = shiftValuesRightByOneSpace(array,i,j);
  }
  return array;
}

var shiftValuesUpByGivenNumber = function(array,i,j,count){
  for (l=0; l<count; l++){
    array = shiftValuesUpByOneSpace(array,i,j);
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

var moveNonZeroValuesUp = function(array){
  for (j=0; j<array.length; j++){
    for (i=0; i<array.length; i++){
      if (array[i][j]==0){
        var count=1;
        for (k=i+1; k<array.length; k++){
          if (array[k][j]==0){
            count++;          
          }
          else{
            k=array.length;
          } 
        }
        array = shiftValuesUpByGivenNumber(array,i,j,count);
      }  
    }
  } 
  return array;
}

var moveNonZeroValuesToRight = function(array){
  for (i=0; i<array.length; i++){
    for (j=array.length-1; j>-1;j--){
      var count = 0;
      var k=j;
      while (array[i][k]==0 && k>-1){
        count++;
        k--;
      }
      array = shiftValuesRightByGivenNumber(array,i,j,count);
    }
  } 
  return array;
}

var addAdjacentValuesAndShiftLeft = function(array){
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

var addAdjacentValuesAndShiftUp = function(array){
  for (j=0; j<array.length; j++){
    var i = 0;
    var addition = 0;
    while (i<array.length && addition<1){
      if (array[i][j]==array[i+1][j]){
        array[i][j]+=array[i+1][j];
        array = shiftValuesUpByOneSpace(array,i+1,j);
        addition++;
      }
      i++;
    }
  }
  return array;
}

var addAdjacentValuesAndShiftRight = function(array){
  for (i=0; i<array.length; i++){
    var j = 3;
    var addition = 0;
    while (j>-1 && addition<1){
      if (array[i][j]==array[i][j-1]){
        array[i][j]+=array[i][j-1];
        array = shiftValuesRightByOneSpace(array,i,j-1);
        addition++;
      }
      j--;
    }
  }
  return array;
}

var createArrayToStoreLocationsOfEmptySpaces = function(array){
  var storeLocationsArray = [];
  for (i=0; i<array.length; i++){
    for (j=0; j<array.length; j++){
      if (array[i][j]==0){
        storeLocationsArray.push([i,j]);
      }
    }
  }
  return storeLocationsArray;
}

var placeTwoInEmptySpot = function(array){
  var emptySpacesArray = createArrayToStoreLocationsOfEmptySpaces(array);
  var k = Math.round(Math.random()*(emptySpacesArray.length-1));
  var i = emptySpacesArray[k][0];
  var j = emptySpacesArray[k][1];
  array[i][j]=2;
  return array;
}