var myNum : number = 5;
var myString : string = "Hello Universe";
var myArr : number[] = [1,2,3,4];
var myObj : object = { name:'Bill'};
var anythingVariable : any = "Hey";
var anythingVariable : any = 25; 
var arrayOne : boolean[] = [true, false, true, true]; 
var arrayTwo : any[] = [1, 'abc', true, 2];
var myObj : object = { x: 5, y: 10 };
// object constructor
class MyNode {
    val: any;
    _priv: number;

    constructor(val: any) {
        this.val = val;
    }
    doSomething(): void {
        this._priv = 10;
    };
};
let myNodeInstance: MyNode = new MyNode(1);
console.log(myNodeInstance.val);
function myFunction(): void {
    console.log("Hello World");
    return;
}
function sendingErrors(): never {
	throw new Error('Error message');
}
