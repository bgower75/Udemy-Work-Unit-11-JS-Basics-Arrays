// define the function
function myForEach(arr, func) {
  // takes the function and calls it for every item in the array via a loop
  for(var i = 0; i < arr.length; i++) {
    func(arr[i]);
  }
}

//using anonymous function
var colors = ["red", "orange", "green"];

myForEach(colors, function(color) {
  console.log(color);
});
