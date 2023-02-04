// Apply , Call & Bind in JS

let Details={
    name:"Naman",
    Age:22,
    printDetails:function(){
        console.log(this)
    }
}
Details.printDetails();
let Details2={
name:"Naman" ,lastname:"Jain"
}
// Function borrowing
Details.printDetails.call(Details2);