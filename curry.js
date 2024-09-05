var curry= function(fn,fixedParam){
   return function(...restParams) {
        return fn(fixedParam, ...restParams);
    };
}

var addall=function(){
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}
// var add=function(a,b,c,d,e){
//     return a;
// }
var add1=curry(addall,2);
console.log(add1(2,3,4,5))