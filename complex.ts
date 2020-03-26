class Complex {
	private real:number;
	private img:number;
	
	constructor(real:number, img:number) {
		this.real = real;
		this.img = img;
	}
	
	toString = () : string => {
        return (`${this.real} ${this.img}i`);
    }
	
	addComplex(obj:Complex):Complex {
		return new Complex(this.real + obj.real,this.img + obj.img);
	}
	
	subComplex(obj:Complex):Complex {
		return new Complex(this.real - obj.real,this.img - obj.img);
	}
	
	absoluteVal():number {
		return Math.sqrt( Math.pow(this.real,2) + Math.pow(this.img,2) );
	}
}


let zesp:Complex = new Complex(1,4);		//l1
let zesp2:Complex = new Complex(9,3);		//l2

let calc:Complex = zesp.addComplex(zesp2);	//l1 + l2
console.log(calc);

let calc2:Complex = calc.subComplex(zesp);	//(l1+l2) - l1 = l2
console.log(calc2);

let calc3 = calc2.absoluteVal();			//abs(l2)
console.log(calc3);
