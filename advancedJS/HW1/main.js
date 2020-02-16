function HamburgerException(message) {
    this.message = message;
}

HamburgerException.prototype = Object.create(Error.prototype);
// HamburgerException.__proto__ = Error.prototype;


function Hamburger(size, stuffing) {
    try {
        if (!size || size.type !== 'size') {
            throw new HamburgerException('Incorrect size of hamburger or no size given');
        }
        if (!stuffing || stuffing.type !== 'stuffing') {
            throw new HamburgerException('Incorrect stuffing or no stuffing given');
        }
        this._size = size;
        this._stuffing = stuffing;
        this._toppings = [];

    } catch (e) {
        console.error(e.message);
    }


}

Hamburger.prototype.addTopping = function (topping) {
    try {
        if (this._toppings.includes(topping)) {
            throw new HamburgerException('Such topping already added. Choose different one.');
        }
        if (!topping || topping.type !== 'topping') {
            throw new HamburgerException('Incorrect topping. Try another');
        }
        this._toppings.push(topping);
    } catch (e) {
        console.error(e.message);
    }
}

Hamburger.prototype.getToppings = function () {
    try {
        if (this._toppings.length > 0) {
            return this._toppings;
        }
        throw new HamburgerException('No topping added. Try to add at least on.')
    } catch (e) {
        console.error(e.message);
    }

}

Hamburger.prototype.removeTopping = function (topping) {
    try {
        if (topping.type==="topping"&&this._toppings.includes(topping)) {
            var index = this._toppings.indexOf(topping);
            this._toppings.splice(index, 1);
        }
        throw new HamburgerException('No such topping in burger or incorrect topping. Try again');
    } catch (e) {
        console.error(e.message);
    }
}

Hamburger.prototype.getSize = function () {
    return this._size;
}

Hamburger.prototype.getStuffing = function () {
    return this._stuffing;
}

Hamburger.prototype.calculatePrice = function () {
    var totalPrice = this._size.price + this._stuffing.price;
    if (this._toppings.length > 0) {
        totalPrice += this._toppings.reduce((total, num) => {
            return total + num.price;
        }, 0);
    }
    return totalPrice;
}

Hamburger.prototype.calculateCalories = function () {
    var totalCalories = this._size.calories + this._stuffing.calories;
    if (this._toppings.length > 0) {
        totalCalories += this._toppings.reduce((total, num) => {
            return total + num.calories;
        }, 0);
    }
    return totalCalories;
}

Hamburger.SIZE_SMALL = {
    name: 'small',
    price: 50,
    calories: 20,
    type: 'size'
};
Hamburger.SIZE_LARGE = {
    name: 'large',
    price: 100,
    calories: 40,
    type: 'size'
};
Hamburger.STUFFING_CHEESE = {
    name: 'cheese',
    price: 10,
    calories: 20,
    type: 'stuffing'
};
Hamburger.STUFFING_SALAD = {
    name: 'salad',
    price: 20,
    calories: 5,
    type: 'stuffing'
};
Hamburger.STUFFING_POTATO = {
    name: 'potato',
    price: 15,
    calories: 10,
    type: 'stuffing'
};
Hamburger.TOPPING_MAYO = {
    name: 'mayo',
    price: 20,
    calories: 5,
    type: 'topping'
};
Hamburger.TOPPING_SPICE = {
    name: 'spice',
    price: 15,
    calories: 0,
    type: 'topping'
};

var h1 = new Hamburger(Hamburger.SIZE_LARGE, Hamburger.STUFFING_CHEESE);
var h2 = new Hamburger();

h1.getToppings();

h1.addTopping(Hamburger.TOPPING_MAYO);
h1.addTopping(Hamburger.TOPPING_SPICE);

console.log(h1.calculatePrice());
