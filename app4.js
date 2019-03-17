var counter = 0;
function printValue(divId, value) {
    $("#"+divId).val(value)
}
printValue("contor", 0) ;

$("#inc").on('click', increment);

function increment() {
    counter++;
    printValue("contor", counter);
}