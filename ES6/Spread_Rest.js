//rest
function AddNum(a,b,c,...other){
    console.log(other)
    return a+b+c;
}
console.log(addNum(3,4,5));

//Spread
var num=[2,3,4,5];
AddNum(...num);

