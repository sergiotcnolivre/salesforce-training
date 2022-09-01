//Write a JavaScript function to check whether a given value is a valid url or not

function isValidURL(string) {
  let res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
  return (res !== null)
};

let testCase1 = "http://en.wikipedia.org/wiki/Procter_&_Gamble";
console.log(isValidURL(testCase1)); // return true

let testCase2 = "http://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&docid=nIv5rk2GyP3hXM&tbnid=isiOkMe3nCtexM:&ved=0CAUQjRw&url=http%3A%2F%2Fanimalcrossing.wikia.com%2Fwiki%2FLion&ei=ygZXU_2fGKbMsQTf4YLgAQ&bvm=bv.65177938,d.aWc&psig=AFQjCNEpBfKnal9kU7Zu4n7RnEt2nerN4g&ust=1398298682009707";
console.log(isValidURL(testCase2)); // return true

let testCase3 = "https://sdfasd";
console.log(isValidURL(testCase3)); // return false

let testCase4 = "dfdsfdsfdfdsfsdfs";
console.log(isValidURL(testCase4)); // return false

let testCase5 = "magnet:?xt=urn:btih:123";
console.log(isValidURL(testCase5)); // return false

let testCase6 = "https://stackoverflow.com/";
console.log(isValidURL(testCase6)); // return true

let testCase7 = "https://w";
console.log(isValidURL(testCase7)); // return false

let testCase8 = "https://sdfasdp.ppppppppppp";
console.log(isValidURL(testCase8)); // return false