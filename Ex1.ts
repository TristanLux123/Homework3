let a:number = 4;
let b:number = 10;
console.log(a, " ",b)

function swap2(){
    let c:number = a; // c is now == to a
    a = b; // a is now == to b (first swap)
    b = c; // b is now == to c (second swap)
}

//    function swap()
  //  {
  //  a = a * b;    
 //   b = a / b;     
 //   a = a / b;    
  //  }


console.log("\n")
swap2()
// swap()
console.log(a, " ",b) 