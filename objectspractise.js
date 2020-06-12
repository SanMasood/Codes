const { clearScreenDown } = require("readline");
const { CLIENT_RENEG_LIMIT } = require("tls");
const { getMaxListeners } = require("process");

const A = function (x) {
    this.x = x;
    this.getX = (x) =>{
        return this.x*2;
    }
}

const B = function B(x,y){
    this.y = y;
    this.x = x;
    this.getY = (x,y) => {
        return this.y*this.x;
    }

}
const newA = new A(23);
console.log(newA.x, newA.getX());

const newB = new B(11,14);
console.log(newB.getY(9,14));
