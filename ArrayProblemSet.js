// printReverse()
// printReverse([1,2,3,4]);
// printReverse(["a","b","c"]);

var list = [1,2,3,4];
var alpha = ["a","b","c"];
function printReverse(params) {
  for(var i = params.length-1; i >= 0; i--) {
    console.log(params[i]);
  }
}

// isUniform()
// isUniform([1,1,1,1]);
// isUniform([2,1,1,1]);
// isUniform(["a","b","p"]);
// isUniform(["b","b","b"]);

var ones = [1,1,1,1];
var notOnes = [2,1,1,1];
var notBs = ["a","b","p"];
var bs = ["b","b","b"];
function isUniform(params) {
  var first = params[0];
  for(var i = 1; i < params.length; i++) {
    if(params[i] !== first){
      return false;
    }
  }
  return true;
}
// forEach loop would not work here as the first return will exist the inner function and not complete the task


// sumArray()
// sumArray([1,2,3]);
// sumArray([10,3,10,4]);
// sumArray([-5,100]);
var six = [1,2,3];
var twentySeven = [10,3,10,4];
var ninetyFive = [-5,100];
function sumArray(params) {
  var result = params[0];
  for(var i = 1; i<params.length; i++) {
    result += params[i];
  }
  return result;
}

function sumArray(params) {
  var result = 0;
  params.forEach(function(element) {
    result += element;
  })
  return result;
}


//max()
//([1,2,3]);
//([10,3,10,4]);
//([-5,100]);
var three = [1,2,3];
var ten = [10,3,10,4];
var hundred = [-5,100];
function max(params) {
  var maxNum = 0;
  params.forEach(function(number) {
    if(maxNum <= number) {
      maxNum = number;
    }
  })
  return maxNum;
}
