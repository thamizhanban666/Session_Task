let num = [1, 2, 3, 4, 5];

let output = num.reduce((a, c) => a + c);
console.log(output);

Array.prototype.myReduce = function (cb) {
   let a = this[0];
   for (let i = 1; i < this.length; i++){
      a = cb(a, this[i]);
   }
   return a;
}

let myOutput = num.reduce((a, c) => a + c);
console.log(myOutput);
