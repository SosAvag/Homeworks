function logOne () {
    setTimeout(function() {
        console.log("one!");
    }, Math.random() * 1000);
}

function logTwo () {
    setTimeout(function() {
        console.log("two!");
    }, Math.random() * 1000);
}

function inOrder(cb1,cb2){
 cb1();
 setTimeout(function(){
     cb2()
 }, 1000)
}
inOrder(logOne, logTwo);
