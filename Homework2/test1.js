// function printing(){
//      console.log(1);
//     setTimeout(function() {console.log(2);}, 1000);
//     setTimeout(function(){ console.log(3);}, 0);
//      console.log(4);;
// }

// this function will return 1,4,3,2


//for getting result in reverse order we have to add some callbacks

function printing(){
    setTimeout(function(){ console.log(1);}, 3000);
    setTimeout(function() {console.log(2);}, 2000);
    setTimeout(function(){ console.log(3);}, 1000);
    setTimeout(function(){ console.log(4);}, 0);
}