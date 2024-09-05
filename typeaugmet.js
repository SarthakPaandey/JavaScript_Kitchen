var arr=[2,3,4,5]
Array.prototype.sum=function(){
    var sum=0;
    for(i=0;i<this.length;i++){
        sum+=this[i];
    }
    return sum;
}
console.log(arr.sum());
Array.prototype.print=function(){
    for(i=0;i<this.length;i++){
        console.log(this[i]);
    }
}
arr.print();
var arr1=['a','b','c']
Array.prototype.check=function(){
    for(i=0;i<this.length;i++){
     var charCode = this[i].charCodeAt();
        if (charCode > 97 && charCode < 122) {
            return true;
        }
    }
    return false;
}
// var arr2=[1,2,[1,2,3,[1,2]],4,5]
//[3,[6,3]]=[3,9]
String.prototype.capitalise=function(){
    return this.charAt(0).toUpperCase()+this.slice(1);
}

console.log(arr1.check());
var st="hello"
console.log(st.capitalise());
