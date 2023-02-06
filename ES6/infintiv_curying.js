//When can handle infinte number of values
function add(a){
    return function(b){
        if(b)return add(a+b);
        return a;
    }
}
let res=add(1)(2)(3)(4);
console.log(res);