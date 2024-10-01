var str = "Hello";

// var ptn = /^[a-z]*$/i;
var ptn = /^[A-Za-z]*$/;

if (str.match(ptn)) {
    console.log("match");
} else {
    console.log("not match");
}

var num = 1234545, nptn = /^[0-9]*$/;
if (nptn.test(num)) {
    console.log("match");
} else {
    console.log("not match");
}

let line = "This is a Js Language"
let newline = line.replace(/[a]/g, "000")
console.log(line);
console.log(newline);
