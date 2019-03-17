var counter = 0;
function printValue(divId, value) {
    document.getElementById(divId).innerHTML = value ;
}
printValue ( "contor" , 0) ;
document.getElementById ( "inc" ).addEventListener ( "click" ,increment ) ;
document.getElementById ( "dec" ).addEventListener ( "click" ,decrement ) ;

function increment () {
    if(counter < 10){
        counter++;
        printValue ( "contor" , counter );
    }
    
}


function decrement() {
    if(counter > 0){
        counter--;
        printValue ( "contor" , counter );
    }
}