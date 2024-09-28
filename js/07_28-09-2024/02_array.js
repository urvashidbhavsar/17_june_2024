// create an array literal
let ecom = ["Cloth", "Accessories", "Jewellary", "Footware", "Kitchen Tools", "Electronics"];

console.log(ecom);
// to print an single array value
console.log(ecom[0]);
console.log(ecom[1]);
console.log(ecom[2]);
console.log(ecom[3]);

// print all values from array a time use for of loop 
console.log("===== for of loop ======");
for (const e of ecom) {
    console.log(e);
}
console.log("===== using for loop ======");
for (let i = 0; i < ecom.length; i++) {
    console.log(`${i + 1} => ${ecom[i]}`);
}
console.log("===== foreach loop ======");
ecom.forEach(e => {
    console.log(e);
});