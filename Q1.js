// Problems:
// Write a function that iterates through all keys of an object passed in argument, and creates a deep copy of the object. The function should return a deep clone of the object passed in the input parameter. 
// Deep clone: Copy of the object when changing the properties of the new object, do not affect the properties of the original object. (15 marks)
// Write a function take has 
// two input parameters
// A function
// An integer
// Returns a function that invokes the function passed in the first parameter, using the second parameter. (15 marks)
// Write a function bankAccount, that
// Takes one input, openingBalance, returns an object with following methods available on it
// deposit (number): 
// withdraw (number)
// getBalance (number)
// withdraw method should return an error message, if withdrawal amount is greater than the balance available. 
// Should maintain the current balance, in a variable that can not be accessed in any possible means, other than using the three methods available on the object, using the concept of closure (30 marks)
// We need to design the class architecture for a game of Chess. You will create a ChessPiece constructor function and specific pieces such as Rook and Bishop that inherit from ChessPiece.
// Create a constructor function that takes following parameters
// Name: name of the piece, like pawn, rook etc
// Color: color of the piece, while or black
// Position: current position of the piece on the chessboard, represented as A6, B3 etc. X axis of the board to be considered to go from A to H, and Y axis to go from 1 to 8
// Each instance of Piece object should have 
// Method moveTo(newPosition), that updated current position of the piece 
// Create constructor functions Rook and Bishop, that inherit from Piece (using prototypal inheritance. You need assign an object of type Piece to the prototype of Rook and Bishop)
// For the Rook, implement the moveTo(newPosition) method to ensure the piece only moves in a straight line (horizontally or vertically).
//  For the Bishop, implement the moveTo(newPosition) method to ensure the piece only moves diagonally.
// Test the following scenarios: 
// Create a white Rook positioned at "A1" and move it to "A4", "D1", and "C3". 
// Create a black Bishop positioned at "C1" and move it to "E3", "C3", and "A4".
// (40 marks)


//Q1
// function deepcopy(obj){
//     if(typeof obj !== "object" || obj === null){
//         return obj;
//     }
//     var obj1=Array.isArray(obj)?[]:{};
//     for(let i in obj){
//         var key=i;
//         if(obj.hasOwnProperty(i))
//         obj1[key]=deepcopy(obj[i]);
        
//     }
//     return  obj1;

// }
// let obj=[1,2,3,4,5];
// let obj1=[1,2,3,4,5,6];
// console.log(deepcopy(obj));
// obj[0]=10;
// console.log(deepcopy(obj1));
// console.log(deepcopy(obj));
// obj1[0]=100;
// console.log(deepcopy(obj1));


// Q2
// function take(fn, n) {
//     return function(){
//         fn(n);
      
//     }
// }
// function fn(n){
//     console.log(n);
// }
// console.log(take(fn, 5)());
 
// Q3
 
// function bankAccount(openingBalance) {

//     let balance = openingBalance;
//     return {
//         deposit: function (number) {
//             balance += number;
//             return balance;
//         },
//         withdraw: function (number) {
//             if (balance > number) {
//                 balance -= number;
//                 return "Balance After Withdrawal:" + balance
//             }   
//             else {
//                 return "Insufficient funds";
//             }
//         },
//         getBalance: function () {
//             return balance;
//         }
//     };
// }
// let account = bankAccount(1000);

// console.log(account.deposit(500));
// console.log(account.withdraw(20));
// console.log(account.getBalance());

// Q4
// function Piece(name, color, position) {
//     this.name = name;
//     this.color = color;
//     this.position = position;
//     this.moveTo = function(newPosition) {
//         this.position = newPosition;
//     }
// }

// function Rook(name, color, position) {
//     Piece.call(this, name, color, position);
// }

// Rook.prototype = Object.create(Piece.prototype);

// Rook.prototype.moveTo = function(newPosition) {
//     if (newPosition.charAt(0) === this.position.charAt(0) || newPosition.charAt(1) === this.position.charAt(1)) {
//         this.position = newPosition;
//     }
//     else{
//         console.log("Invalid Move");
//     }
// }

// function Bishop(name, color, position) {
//     Piece.call(this, name, color, position);
// }

// Bishop.prototype = Object.create(Piece.prototype);


// Bishop.prototype.moveTo = function(newPosition) {
//     if (Math.abs(newPosition.charCodeAt(0) - this.position.charCodeAt(0)) === Math.abs(newPosition.charCodeAt(1) - this.position.charCodeAt(1))) {
//         this.position = newPosition;
//     }
//     else{
//         console.log("Invalid Move");
//     }
// }

// let rook = new Rook("Rook", "white", "A1");
// rook.moveTo("A4");
// console.log(rook.position);
// rook.moveTo("A1");
// console.log(rook.position);
// rook.moveTo("C3");
// console.log(rook.position);

// let bishop = new Bishop("Bishop", "black", "C1");
// bishop.moveTo("E3");
// console.log(bishop.position);
// bishop.moveTo("C3");
// console.log(bishop.position);
// bishop.moveTo("C4");
// console.log(bishop.position);
// bishop.moveTo("A4");
// console.log(bishop.position);


// function ChessPiece(name, color, position) {
//     this.name = name;
//     this.color = color;
//     this.position = position;
//     this.moveTo = function(newPosition) {
//         if (newPosition.charAt(0) === this.position.charAt(0) || newPosition.charAt(1) === this.position.charAt(1)) {
//             this.position = newPosition;
//         }
//         else{
//             console.log("Invalid Move");
//         }
//     }
// }

// function Rook(name, color, position) {
//     ChessPiece.call(this, name, color, position);
// }

// Rook.prototype = Object.create(ChessPiece.prototype);

// function Bishop(name, color, position) {
//     ChessPiece.call(this, name, color, position);
// }

// Bishop.prototype = Object.create(ChessPiece.prototype);

// Bishop.prototype.moveTo = function(newPosition) {
//     if (Math.abs(newPosition.charCodeAt(0) - this.position.charCodeAt(0)) === Math.abs(newPosition.charCodeAt(1) - this.position.charCodeAt(1))) {
//         this.position = newPosition;
//     }
//     else{
//         console.log("Invalid Move");
//     }
// }

// let rook = new Rook("Rook", "white", "A1");
// rook.moveTo("A4");
// console.log(rook.position);
// rook.moveTo("D1");
// console.log(rook.position);
// rook.moveTo("C3");
// console.log(rook.position);

// let bishop = new Bishop("Bishop", "black", "C1");
// bishop.moveTo("E3");
// console.log(bishop.position);
// bishop.moveTo("C3");
// console.log(bishop.position);
// bishop.moveTo("A4");
// console.log(bishop.position);

function ChessPiece(name, color, position) {
  this.name = name;
  this.color = color;
  this.position = position;
}

ChessPiece.prototype.moveTo = function(newPosition) {
  this.position = newPosition;
};

function Rook(name, color, position) {
  ChessPiece.call(this, name, color, position);
}

Rook.prototype = Object.create(ChessPiece.prototype);

Rook.prototype.moveTo = function(newPosition) {
  if (newPosition.charAt(0) === this.position.charAt(0) || newPosition.charAt(1) === this.position.charAt(1)) {
    this.position = newPosition;
  } else {
    console.log("Invalid move for Rook");
  }
};

function Bishop(name, color, position) {
  ChessPiece.call(this, name, color, position);
}

Bishop.prototype = Object.create(ChessPiece.prototype);

Bishop.prototype.moveTo = function(newPosition) {
  if (Math.abs(newPosition.charCodeAt(0) - this.position.charCodeAt(0)) === Math.abs(newPosition.charCodeAt(1) - this.position.charCodeAt(1))) {
    this.position = newPosition;
  } else {
    console.log("Invalid move for Bishop");
  }
};

// Test scenarios
let rook = new Rook("Rook", "white", "A1");
console.log(rook.position); // A1
rook.moveTo("A4");
console.log(rook.position); // A4
rook.moveTo("D1");
console.log(rook.position); // D1
rook.moveTo("C3");
console.log(rook.position); // Invalid move for Rook

let bishop = new Bishop("Bishop", "black", "C1");
console.log(bishop.position); // C1
bishop.moveTo("E3");
console.log(bishop.position); // E3
bishop.moveTo("C3");
console.log(bishop.position); // Invalid move for Bishop
bishop.moveTo("A4");
console.log(bishop.position); // Invalid move for Bishop

