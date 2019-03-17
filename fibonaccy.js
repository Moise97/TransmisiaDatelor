var a = 1;
var b = 1;
let result = "";
function getFibonaccy(n){
    if(n >= 2){
        result = result+"["+a+","+b;
        let x = a + b;
        for(let i = 3; i<=n; i++){
            result=result+","+x;
            a=b;
            b=x;
            x = a + b;
        }
    }
    result=result+"]";
    return result;
}

(function(){
    console.log(getFibonaccy(2)== "[1,1]"?"Passed":"Failed");
    console.log(getFibonaccy(5)== "[1,1,2,3,5]"?"Passed":"Failed");
})();