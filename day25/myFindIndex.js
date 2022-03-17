const ages = [3, 10, 17, 20, 9];

let result = ages.findIndex((age) => age > 18);
console.log(result);

Array.prototype.myFindIndex = function(cb){
    let r = -1;
    for (let i = 0; i < this.length; i++){
        if (cb(this[i])) {
            r = i;
            this.splice(i)
        }
    }
    return r;
}

let myResult = ages.myFindIndex((age) => age > 18);
console.log(myResult);

