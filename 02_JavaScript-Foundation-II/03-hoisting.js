console.log("1--------------");

console.log(teddy);
console.log(sing());

let teddy = "bear";
function sing() {
  console.log("ohh la la la");
}

// function expression gets hoisted as undefined
var sing = function () {
  console.log("uhhhh la la la");
};
// function declaration gets fully hoisted
function sing2() {
  console.log("ohhhh la la la");
}
