var person = {
    firstname: "urvashi",
    lastname: "bhavsar",
    mobile: 9876543202,
    address: "Surat"
}
console.log(person);

// to print object value
console.log(person.firstname);
console.log(person.lastname);

// use for in loop
console.log("------ print object value ----");
for (const per in person) {
    if (Object.prototype.hasOwnProperty.call(person, per)) {
        console.log(`${per} => ${person[per]}`);
    }
}
