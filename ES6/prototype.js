// Defined and Undefined
const objeet = new Object();
console.log(object)
Array.prototype.convertIntoObject=function(){
    let newobj={};
    this.forEach(element=>{
        newobj[element]=element;
    })
    return newobj;

}
//make new prototype
function namanPrototypr(name){
    this.name=name;
}
const myproto=new namanPrototypr("Naman");
