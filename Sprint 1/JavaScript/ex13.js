//Pick a URL like (https://dev04-storexyz.demandware.net/s/xyz/product/dr.martens.-- rakim&mens&&boots/320100.html?dwvar_3200_color=100) now replace the hyphens, ampersand and dots with spaces and then remove spaces also

const url = 'https://dev04-storexyz.demandware.net/s/xyz/product/dr.martens.-- rakim&mens&&boots/320100.html?dwvar_3200_color=100)'
const reg = /\./ 
let newUrl = url.replace("\..*-.*&", " ")
console.log(newUrl)