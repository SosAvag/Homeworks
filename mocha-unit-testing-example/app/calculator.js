class Calculator {
    constructor(){
        
    };
    add(...args) {
        let invalidArgIdent =0
        for (let el of args){
            if (typeof(el)!=='number'){
                invalidArgIdent++
            }
        }
        if(invalidArgIdent===0){
            return args.reduce((el,acc)=>el + acc,0) 
        } else{
            return 'There is invalid argument'
        }
     }
 
     multiply(...args) {
        let invalidArgIdent =0
        for (let el of args){
            if (typeof(el)!=='number'){
                invalidArgIdent++
            }
        }
         if (args.length===0){
             return 0
         }
         if(invalidArgIdent===0) {
             return args.reduce((el,acc)=>el * acc,1)
         } else {
            return 'There is invalid argument'
         }
         
     };
    ;
};

module.exports = Calculator;