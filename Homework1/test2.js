function addWithDelay(...args){
    let sum =0;
    for(el of args){
        if (el>0){
            sum = sum+el
        } else {
            sum = -1;
            break
        }
    }        
    let p = new Promise(function(resolve, reject){
        if(sum>=0){
           setTimeout(function(){
               resolve(sum)
            },1000)
          } else{
            reject(`Error! Some parameter is a negative number!`)
        }
    }) 
    return p
   
}
addWithDelay(1,2,3,4,5,6) 
    .then(res=>console.log(res))
    .catch(rej =>console.log(rej))
addWithDelay(1,2,3,4,5,-6) 
    .then(res=>console.log(res))
    .catch(rej =>console.log(rej))

