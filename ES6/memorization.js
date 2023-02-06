let sum=0;
const calc=(n)=>{
    for(let i=0;i<=n;i++){
        sum+=i;

    }
    return sum;
}
console.time();
console.log(calc(20));
//Now we can use the cache and memorization
const memorize=(fun)=>{
    let cache={};
    return function(...args){
        let n=args[0];
        if(n in cache){
            console.log("used");
            return cache(n);
        }
        else{
            let result=fun(n);
            cache[n]=result;
            return result;
        }
    }
}
const efficient=memorize(calc);
console.log(efficient(5))
