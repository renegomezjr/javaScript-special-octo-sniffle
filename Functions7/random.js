//function alertRandom(){
//    var random = Math.floor( Math.random() * 6) +1;
//    alert(random);
//}
//
//alertRandom();
//function getRandom(){
//    var random = Math.floor( Math.random() * 6) +1;
//    return random;
//}
//
//alert(getRandom());
//console.log(getRandom());
//document.write(getRandom());

//function getRandom(upper, lower){
//    var random = Math.floor( (Math.random() * 
//                              ( (upper + 1) - lower) ) + lower  ) ;
//    return random;
//}
//document.write(getRandom(10,6));

/*
console.log(getRandom(10));
console.log(getRandom(100));
console.log(getRandom(1000));
console.log(getRandom(500));
*/
/*
function getArea(length, width, unit){
    var area = length * width;
    return area + ' ' + unit;
}

document.write(getArea(10,6, 'sq ft'));
*/

function getRandom(upper, lower){
    if ( isNaN(upper) || isNaN(lower)) {
        throw new Error('You did not enter two numbers');
    }
    return Math.floor( (Math.random() * 
                              ( (upper + 1) - lower) ) + lower  ) ;
}
console.log(getRandom(10,6));
console.log(getRandom('two',6));

