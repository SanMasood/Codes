let promise1 = Promise.resolve("Hello World!") ;
let promise2 = 10;
let promise3 = new Promise((resolve, reject)=> setTimeout(resolve, 3000, "Goodbye"));

Promise.all([promise1, promise2, promise3]).then(values => console.log(values));
console.log("Here I am ");