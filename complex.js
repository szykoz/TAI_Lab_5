"use strict";
class Complex {
    constructor(real, img) {
        this.toString = () => {
            return (`${this.real} ${this.img}i`);
        };
        this.real = real;
        this.img = img;
    }
    addComplex(obj) {
        return new Complex(this.real + obj.real, this.img + obj.img);
    }
    subComplex(obj) {
        return new Complex(this.real - obj.real, this.img - obj.img);
    }
    absoluteVal() {
        return Math.sqrt(Math.pow(this.real, 2) + Math.pow(this.img, 2));
    }
}
let zesp = new Complex(1, 4); //l1
let zesp2 = new Complex(9, 3); //l2
let calc = zesp.addComplex(zesp2); //l1 + l2
console.log(calc);
let calc2 = calc.subComplex(zesp); //(l1+l2) - l1 = l2
console.log(calc2);
let calc3 = calc2.absoluteVal(); //abs(l2)
console.log(calc3);
