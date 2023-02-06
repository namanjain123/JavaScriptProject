//Currying Function
function addition(a){
    return function(b){
        return function(c){
            return a+b+c
        }
    }
}
let res=addition(2)(4)(7);
console.log(res);