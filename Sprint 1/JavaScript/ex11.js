//Write a JavaScript program to search a date within a string using regular expression

function searchDate(str){
var regX = /(([0-2][1-9])|(3[0-1]))[\/-]((0[1-9])|(1[0-2]))[\/-]\d{4}/;
var regX2 = /((0[1-9])|(1[0-2]))[\/-](([0-2][1-9])|(3[0-1]))[\/-]\d{4}/;
var check = regX.test(str);
var check2 = regX2.test(str);
if(check){ return check; }
else if(check2){ return check2; }
else{ return false; }
}
console.log(searchDate('Sergio was born in Brazil, on 14/03/1996.')); //true
console.log(searchDate('Sergio was born in Brazil, on 03/14/1879.')); //true
console.log(searchDate('03/64/1879')); //false
console.log(searchDate('13/34/1679')); //false
console.log(searchDate('32/12/1279')); //false