function sum(n){
    if( typeof n === 'undefined') 
        return "n is undefined" ;
    var sum = 0;
    for ( var i =1; i <= n ; i ++) {
        sum += i ;
    }
    return sum ;
}

( function () {
    console.log (sum(0) ==0? "Passed" : "Failed" ) ;
    console.log (sum(2) ==3? "Passed" : "Failed" ) ;
    console.log (sum(4) ==10? "Passed " : "Failed" ) ;
    console.log (sum() == "n is undefined" ? "Passed" : "Failed" ) ;
    }) () ;