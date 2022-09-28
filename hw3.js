var a = 4;
var b = 10;
console.log(a, " ", b);
function Swapvalue() {
    var c = a;
    a = b;
    b = c;
}
//    function swap()
//  {
//  a = a * b; //a=200 (10*20)    
//   b = a / b; //b=10 (200/20)    
//   a = a / b; //a=20 (200/10)   
//  }
console.log("\n");
Swapvalue();
// swap()
console.log(a, " ", b);
