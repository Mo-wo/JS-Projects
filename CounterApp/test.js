// Testing Variable Scopes
// const otherName = 'Onyi';
// console.log(myName);

// (function iifeTest(){
//     console.log(`Testing to see if I can use ${myName} in this scope`);
// })()

function scopeTest(){
    var myName = 'Mowo';
    console.log(myName);
}; 
scopeTest()
console.log(myName);


// function logName(){
//     const myName = 'Victoria';
//     console.log(`Name is ${myName} again`);
//     function andAgain() {
//         console.log(`Still ${myName}`)
//         function yetAgain() {
//             console.log(`I am Still ${myName}`)
//             function andYetAgain() {
//                 console.log(`I remain ${myName}`)
//             };
//             andYetAgain()
//         };
//         yetAgain()
//     };
//     andAgain()
// }; 
// logName()

function evenOutside(){
    console.log(`I remain ${myName}`)
};
evenOutside()



// myName = 'Onyi'
// console.log(myName);
// console.log(myName);

