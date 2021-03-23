let arr = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Jack'},
    {id: 3, name: 'Sara'},
    {id: 4, name: 'Helen'}
];

function loadArray(array){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve(array)
            }, 1000)
    })
    
    }

function getItem(array,id){
    let x = 0;
    for(el of array){
        if(el.id===id){
            x = el
            break
        }
    }
    let p = new Promise(function(resolve,reject){
        if(x!==0){
            setTimeout(()=>resolve(x), 1000)
        } else {
            reject(`There is no such item in the array!`)
        }
    })
    return p
}


async function myAsyncFunc(id){
    let array =await loadArray(arr);
    try{
        let res =await getItem(array, id)
        console.log(res);     }
    catch(err){
        console.log(err)
    }
}
myAsyncFunc(4)
