let counter=0;
function getData(){
    console.log("fetching"+counter++)
}
function mydevounce(call,d){
    let timer;
    return function(...args){
        if(timer) clearTimeout(timer);
        setTimeout(()=>{
            call();

        },d)
    }
}
const Betterfunc=mydevounce(getData,1000)