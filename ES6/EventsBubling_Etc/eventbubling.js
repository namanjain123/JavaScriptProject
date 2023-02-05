//Event Bubling
var div=document.querySelector("div");
div.addEventListener("click",()=>{
    console.log("button hit in div")
})
//Capturing
var button=document.querySelector("button");

//propogartin
button.addEventListener("click",(event)=>{
    event.stopPropagation();
    console.log("click in button")
})

//imidiate propogation

button.addEventListener("click",(event)=>{
    event.stopImmediatePropagation();
    console.log("click in button")
})