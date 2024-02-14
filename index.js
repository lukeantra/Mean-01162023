// //day3
// MyReduce 
// const numbers = [175, 50, 25];
// const reducer = function(acc, cur) {
//     return acc - cur;
// }

// Array.prototype.myReduce = function (callbackfn, initVal) {
//     let acc = initVal;
//     for(let i = 0; i < this.length; i++){
//         acc = callbackfn(acc, this[i], i);
//     }
//     return acc;
// }



// function total(cb, arr) {
//     for (let i = 0; i < arr.length; i++) {
//         cb(arr[i], i, arr);
//     }
// }

// function print(a) {
//     console.log(a);
// }

// total(print, [1, 2, 3, 4, 5]);



// Array.prototype.myReduce = function(...args) {
//     // let acc = this[0];
//     // let index = 1;
//     // if (args.length > 1) {
//     //     acc = args[1];
//     //     index = 0;
//     // }
//     let [acc, index] = args.length === 1 ? [this[0], 1] : [args[1], 0];
//     for (let i = index; i < this.length; i++) {
//         acc = args[0](acc, this[i], i, this);
//     }
//     return acc;
// }

// console.log(numbers.myReduce(reducer, 2));
// console.log([].reduce(reducer));


// iife
// (() => {
//     console.log(5);
// })();

// (function() {
//     console.log(5);
// })();

// (function () {
//     function generateMagicNumber() {
//         return Math.floor(Math.random() * 100) + 900;
//     }

//     console.log("This is your magic number: " + generateMagicNumber());

//     var favoriteNumber = 5;
//     console.log("Twice your favorite number is " + favoriteNumber * 2);
// })();

// generateMagicNumber();

// !  closure: gives you access of outer scope from an inner function
// function init() {
//     let name = 'Dio';
//     return function() {
//         console.log(name);
//     }
//     // displayName();
// }

// var myFunc = init();
// myFunc();

// function makeAdder(x) {

//     let z = 2 + x;
//     return function (y) {
//         return x + y + z;
//     };
// }

// //   const add5 = makeAdder(5);

// //   console.log(add5(2)); // 7
// const add10 = makeAdder(10);
// console.log(add10(2));


// currying
// const e = 10;
// function sum(a) {
//     return function (b) {
//         return function (c) {
//             // outer functions scope
//             return function (d) {
//                 // local scope
//                 return a + b + c + d + e;
//             };
//         };
//     };
// }

// console.log(sum(1)(2)(3)(4));

// function add(x, y) {
//     return (x + y);
// }

// console.log(add(10, 20));

// function makeAdder(x) {
//     return function (y) {
//         return x + y;
//     };
// }

// console.log(makeAdder(10)(20));

// this
// const callback1 = a => a + 2; // 12 
// const callback2 = b => b * 2; // 24
// const callback3 = c => c / 3; // 8

// console.log(runAll(callback1, callback2, callback3,)(10));

// function runAll(...args) {
//     return function (num) {
//         // let accumulator = num;
//         // for (let element of args) {
//         //     accumulator = element(accumulator);
//         // }
//         // return accumulator;
//         return args.reduce(function(arg1, func) {
//             return func(arg1);
//         }, num)
//     }
// }


// Interview question:
// const targetFn = (a) => console.log(a);

// const fn = limitedFunction(3, targetFn);

// function limitedFunction(limitNum, cb) {
//     // >>> closure
//     let counter = limitNum;
//     return function(i) {
//         if (counter > 0) {
//             counter -= 1;
//             return cb(i);
//         } else {
//             console.log("out of limits");
//         }
//     }
// }

// fn(1); // 1
// fn(2); // 2
// fn(6); // 6
// fn(3); // out of limits


// this
// console.log(this);

// (function () {
//     console.log(this);
// })();

// const myObj = {
//     name: 'Dio',
//     age: 18,

//     foo: function () {
//         console.log(this); // this points to obj

//         const bar = function () {
//             console.log(this); // points to window/global env

//             const baz = function () {
//                 console.log(this); // points to window/global env
//             }
//             baz();
//         }
//         bar();
//     }
// }

// myObj.foo();

// class Person {
//     constructor(name) {
//         this.name = name; 
//     }

//     showThis() {
//         console.log(this); 
//     }

//     static staticShowThis() {
//         console.log(this);
//     }
// }

// const p = new Person('Dio');
// p.showThis();
// Person.staticShowThis();

// 
// function PersonFn(name, age) {
//     this.name = name;
//     this.age = age;
// }

// PersonFn.prototype.run = function() {
//     console.log(this);
// }

// const p2 = new PersonFn('Jojo');
// p2.run();

//! 1. Function: if this keyword in the function, it will point to global env
//! 2. Object: if the function is the direct child of an object, this keyword within this function points to the obj
//! 3.1 Class: if this is in the class, it will point to the instance.
//! 3.2 Class: if you use static, it will point to the class.


// call apply bind
// bind vs. call
// const obj = {
//     pi: 3.14,
//     getPi() {
//         return this.pi;
//     }
// }

// function getPerimeter(radius) {
//     console.log(this.getPi() * 2 * radius);
// }

// getPerimeter(20);
// bind: lazyloading
// const newGetPerimeter = getPerimeter.bind(obj);
// newGetPerimeter(20);

// call: eagarloading
// getPerimeter.call(obj, 20);

// call vs apply 
// const obj = {
//     pi: 3.14,
//     getPi() {
//         return this.pi;
//     }
// }
// function getNum(...args) {
//     console.log(this.getPi(), ...args);
// }
// getNum.call(obj, 1, 2, 3);
// getNum.apply(obj, [1, 2, 3, 4]);

// arrow functions: this
// const myObj = {
//     name: 'Dio',
//     age: 18,

//     foo: function () {
//         console.log(this); // this points to obj

//         const bar = () => {
//             console.log(this); // this points to obj 

//             const baz = () => {
//                 console.log(this); // this points to obj
//             }
//             baz();
//         }
//         bar();
//     }
// }

// myObj.foo();


// -------------------------js-day4------------------
// Event Loop
// console.log(0);
// setTimeout(() => {console.log(1)}, 2000);
// console.log(2);
// // setTimeout(() => {console.log(3)}, 3000);
// // console.log(4);


// Call stack       |    Async api/ web api         |       Event queue/Task queue

//console.log(0)
// setTimeout()     ->    setTimeout(cbFn, timer/2s)  2s->     cbFn -> (check callstack empty?)  -> Call Stack
//console.log(2)

// settimeout helps to send callback function into task queue after i*1000.

// let i = 2;
// function foo() {
//     console.log(i);
// }
// setTimeout(foo, i*1000);
// i = 5;


// function foo() {
//     console.log(1);
//     return 1;
// }

// console.log(foo);
// console.log(foo()); 

//  function foo() {
//     for (var i = 1; i < 5 ; i++){
//         setTimeout(() => console.log(i), i*1000);
//     }
//  }

//  foo();

// for (var i = 1; i < 5; i++) {
//     (function (num) {
//         setTimeout(() => console.log(num), num * 1000);
//     })(i);
// }


// ------------------Callback function && callback hell-------------------------
// const foo = () => console.log('foo showup');

// const randomNum = () => Math.floor((Math.random() * 6));

// const callFnInRandomTime = (callback) => {
//     const timer = randomNum();
//     console.log(`${timer}s`);

// setTimeout(callback, timer * 1000);

// }

// callFnInRandomTime(() => {
//     callFnInRandomTime(() => {
//         callFnInRandomTime(() => {
//             callFnInRandomTime(() => {
//                 callFnInRandomTime(() => {
//                     callFnInRandomTime(() => {
//                         callFnInRandomTime(() => {
//                             callFnInRandomTime(foo);
//                         });
//                     });
//                 });
//             });
//         });
//     });
// });

// XHR
// const getTodoFromJsonPlaceHolder = (id, cb) => {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             // Typical action to be performed when the document is ready:
//             cb(JSON.parse(xhttp.response))
//         }
//     };
//     xhttp.open("GET", `https://jsonplaceholder.typicode.com/todos/${id}`, true);
//     xhttp.send();
// }

// function print(ele) {
//     console.log(ele);
// }

// getTodoFromJsonPlaceHolder(4, print);
// getTodoFromJsonPlaceHolder(15, print);
// getTodoFromJsonPlaceHolder(78, print);

// getTodoFromJsonPlaceHolder(4, (data)=> {
//     print(data);
//     getTodoFromJsonPlaceHolder(15, data => {
//         print(data);
//         getTodoFromJsonPlaceHolder(16, data => {
//             print(data);
//             getTodoFromJsonPlaceHolder(17, data => {
//                 print(data);
//                 getTodoFromJsonPlaceHolder(18, data => {
//                     print(data);
//                     getTodoFromJsonPlaceHolder(19, data => {
//                         print(data);
//                     })
//                 })
//             })
//         })
//     })
// });

//JSON.parse()
//JSON.stringify()

// Promise
// const promise = new Promise((resolve, reject) => {
//     console.log('hello');
// })

// new Promise((resolve, reject) => {
//     console.log('hello2');
// })



// new Promise((resolve, reject) => {
//     // resolve(a);
//     reject('a mistake');
//     resolve('hello');
// }).then((str) => {
//     console.log(str);
//     return 'test1';
// }).then((str) => {
//     console.log(str);
//     return 'test2';
// }).then((str) => {
//     console.log(str);
// }).catch(err => console.log('err: ', err));

// Interview question:

// console.log(1);

// new Promise((res, rej) => {
//     console.log(2);
//     res(3);
// }).then((str) => {
//     console.log(str);
//     return '4';
// }).then((name) => {
//     console.log(name);
// }).catch(err => console.log('err: ', err));

// console.log(5);


// /////////////////
// const promise1 = Promise.resolve(2);
// const promise2 = 20;
// const promise3 = new Promise((res, rej) => {
//     setTimeout(res, 1000, 'foo');
// })

// Promise.all([promise1, promise2, promise3]).then(values => {
//     console.log(values);
// })

const getTodo = (id, cb) => {
    return new Promise((res, rej) => {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                // Typical action to be performed when the document is ready:
                res(JSON.parse(xhttp.response))
            }
        };
        xhttp.open("GET", `https://jsonplaceholder.typicode.com/todos/${id}`, true);
        xhttp.send();
    })
}

// function print(ele) {
//     console.log(ele);
// }

// getTodo(4).then(data => {
//     print(data);
//     return getTodo(78);
// }).then(data => {
//     print(data);
//     return getTodo(15);
// }).then(data => print(data));

// async await : syntax sugar of promise
// (async ()=> {
//     try{
//         console.log(a);
//         const todo1 = await getTodo(1);
//         console.log(todo1);

//         const todo2 = await getTodo(2);
//         console.log(todo2);

//         const todo3 = await getTodo(3);
//         console.log(todo3);
//     }
//     catch (err) {
//         console.log(err);
//     }
// })();


// some questions 

// (function testFoo() {
//   let foo = "new test";
//   if(true) {
//     var bar = "new bar";
//     console.log(bar);
//   }
//   console.log(foo);
//   console.log(bar);
// })();

// (function testTimeout(){
//   console.log('1');
//   setTimeout(() => {
//     console.log('inside setTimeout');
//   }, 0);
//   console.log('2');
// })();

// My promise

// class MyPromise {
//     thenCallBackqueue = [];
//     catchCallBackqueue = [];
//     currentValue = undefined;

//     constructor(executor) {
//         try{
//              // reject is arrow function, so no bind() for reject
//             executor(this.resolve.bind(this), this.reject);
//         } catch (err) {
//             this.reject(err);
//         }  
//     }

//     resolve(resData){
//         this.currentData = resData;
//         setTimeout(() => {
//             while(this.thenCallBackqueue.length) {
//                 const cb = this.thenCallBackqueue.shift();
//                 if(this.currentData instanceof MyPromise){
//                     // console.log(1);
//                     this.currentData.then( data => {
//                         this.currentData = cb(data);
//                     })
//                 } else{
//                     this.currentData = cb(this.currentData);
//                 }

//             }
//         })
//     }


//     reject = (rejData) => {
//         setTimeout(() => {
//             const cb = this.thenCallBackqueue.shift();
//             cb(rejData);
//         })
//     }

//     then(thenFn) {
//         this.thenCallBackqueue.push(thenFn);
//         return this;
//     }

//     catch(catchFn) { 
//         this.thenCallBackqueue.push(catchFn);
//         return this;
//     }
// }

// new MyPromise((res, rej) => {
//     // console.log(1);
//     res(2);
// }).then((str) => {
//     console.log(str);
//     return 3;
// }).then(console.log);

// const randomNum = () => Math.floor(Math.random() * 6);

// new MyPromise((res, rej) => {
//     console.log(a);
//     const timer = randomNum();
//     console.log(timer);

//     if(timer > 2) {
//         rej('this is an reject');
//     } else res('this is an resolve');
// }).then((str) => {
//     console.log(str);
//     return 4;
// }).catch(console.log);

// ----this keyword---------------
// class Person {
//     constructor(name) {
//         this.name = name;

//         function executor() {
//             console.log(this);
//         }
//         executor();

//     }

//     showThis() {
//         console.log(this); 
//     }
// }

// const p = new Person('Dio');
// // p.showThis();

// MyFetch
// MyFetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(console.log)


function MyFetch(url, options) {
    let method = options && options.method ? options.method : 'GET';

    return new Promise((res, rej) => {
        var xhttp = new XMLHttpRequest();
        xhttp.open(method, url, true);

        if (options && options.headers) {
            Object.keys(options.headers).forEach((key) => {
                xhttp.setRequestHeader(key, options.headers[key]);
            });
        }

        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status >= 200 && this.status < 300) {
                // Typical action to be performed when the document is ready:
                // res(JSON.parse(xhttp.response))
                const responseData = {
                    json: function () {
                        return JSON.parse(xhttp.response);
                    }
                };
                res(responseData);
            }
        };

        // xhttp.send();
        options && options.body ? xhttp.send(options.body) : xhttp.send();
    })
}

MyFetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((response) => response.json())
    .then((json) => console.log(json));


MyFetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    body: JSON.stringify({
        id: 1,
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((response) => response.json())
    .then((json) => console.log(json));

