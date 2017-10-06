var arr = [1, 2, 3];
function map(fn, array){
 var arr_map = [];
 for(var i=0; i<array.length; i++){
  arr_map[i] = fn(arr_map[i]);
 }
 return arr_map;
}

function square(x) { return x * x; } 
console.log(arr);