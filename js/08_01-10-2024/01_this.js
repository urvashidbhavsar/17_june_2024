var chair = {
    color: "red",
    price: 500,

    chairinfo: function () {
        return this.color + " " + this.price
    }
}
var c = chair.chairinfo();
console.log(c);
