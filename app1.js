var sum = 10;
var name = 'Alexandru';
var isActive = true;
var user = {
    "id" : 1 ,
    "name" : "Alexandru Cristea" ,
    "username" : "acristea" ,
    "email" : "acristea@test.com" ,
    "address" : {
    "street" : "Padin" ,
    "number" : "Ap.10" ,
    "city" : "Cluj-Napoca" ,
    "zipcode" : "123456" ,
    "geo" : {
    "lat" : "46.783364" ,
    "lng" : "23.546472"
    }
    },
    "phone" : "004-07xx-123456" ,
    "company" : {
    "name" : "XYZ" ,
    "domain" : "Air Traffic Management" ,
    "cities" : [ "Cluj-Napoca", "Vienna", "Paris" ]
    }
}

console.log ( user.name ) ;
console.log ( user.address.geo.lat ) ;
console.log ( user.company.name) ;
console.dir ( user.company.cities) ;
console.log ( user.company.cities[0]) ;


function print ( message ) {
    console . log ( message ) ;
    }
print ( " hello " ) ;


var password = " 123456 " ;
console . log ( password == " 123456 " ? " ALLOW " : " DENY " ) ;


document.getElementById("n").addEventListener('input',inputSum);
function inputSum () {
    var inputNumber=parseInt(document.getElementById("n").value);
    suma(inputNumber) ;
}

function suma(n){
    if( typeof n === 'undefined') 
        return "n is undefined" ;
    if(typeof n === 'string')
        return "n is undefined" ;
    if(typeof n === 'boolean')
        return "n is undefined" ;
    var sum = 0;
    for ( var i =1; i <= n ; i ++) {
        sum += i ;
    }
    return sum ;
}


function test(){
    console.log(suma("s d f") == "n is undefined" ? "Passed" : "Failed" ) ;
    console.log(suma(true) == "n is undefined" ? "Passed" : "Failed" ) ;
}
test();

