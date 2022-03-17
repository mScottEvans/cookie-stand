'use strict';


// Pat needs to calculate the number of cookies each location must make every day so that it can manage its supplies inventory and baking schedule.

// What are we going to display?

// The minimum number of customers per hour.
// The maximum number of customers per hour.
// The average number of cookies purchased per customer.

// What does Pat need to do?

// Pat will need to be able to add and remove locations from the daily projections report.
// Pat will also need to be able to easily modify the input numbers for each location based on day of the week, special events, and other factors.

// Step: 1
// create JS object literals for each shop location.




// GLOBAL*********************
let operationHour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


let cookiesSold = document.getElementById('cookies-sold');
console.log(cookiesSold);
let tableElem = document.createElement('table');
cookiesSold.appendChild(tableElem);



// function cookieperHour(){
//   for(let i = 0; i < operationHour.length; i++){
//     let hourTotal = Math.ceil(this.custperHour() * this.avgCookie);
//     this.totalCookies += hourTotal;
//     this.cookiesBought.push(hourTotal);
//     console.log(this.totalCookies);
//   }
// }
    
    
// ************* CONSTRUCTOR FUNCTION REFACTOR ******************
    
let shop = [];
    
function Store(name, minCust, maxCust, avgCookie){
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;


  this.cookiesBought = [];
  this.totalCookies = 0;
      
  shop.push(this);
}
    
    
    
// USE PROTOTYPE TO DEFINE METHODS - PROTOTYPE = INHERITS
//const            method
Store.prototype.getCustperHour = function(){
  return custperHour(this.minCust, this.maxCust);
}
function custperHour(minCust, maxCust){
  return Math.floor(Math.random() * (maxCust - minCust + 1) + minCust);
}
Store.prototype.cookiesperHour = function(){
  for(let i = 0; i < operationHour.length; i++){
    let hourTotal = Math.ceil(this.getCustperHour() * this.avgCookie);
    this.totalCookies = this.totalCookies + hourTotal;
    this.cookiesBought.push(hourTotal);
        
  }
  console.log(this.totalCookies);
  console.log(this);
};

// ***** DOM MANIPULATION *****

Store.prototype.render = function(){

  let rowElem = document.createElement('tr');
  tableElem.appendChild(rowElem);

  let tableDataElem = document.createElement('td');
  tableDataElem.textContent = this.name;
  rowElem.appendChild(tableDataElem);



  for(let i = 0; i < operationHour.length; i++){ 
    tableDataElem = document.createElement('td');
    tableDataElem.textContent = this.cookiesBought[i];
    rowElem.appendChild(tableDataElem);
  }
  tableDataElem = document.createElement('td');
  tableDataElem.textContent = this.totalCookies;
  rowElem.appendChild(tableDataElem);


};


function renderHeader(){
  let rowElem = document.createElement('tr');
  tableElem.appendChild(rowElem);
  let tableHeadElem = document.createElement('th');
  rowElem.appendChild(tableHeadElem);


  for(let i = 0; i < operationHour.length; i++){ 
    tableHeadElem = document.createElement('th');

    tableHeadElem.textContent = operationHour[i];

    rowElem.appendChild(tableHeadElem);

  }
  tableHeadElem = document.createElement('th');

  tableHeadElem.textContent = 'total';

  rowElem.appendChild(tableHeadElem);
}



new Store('Seattle', 23, 65, 6.3);
new Store('Tokyo', 3, 24, 1.2);
new Store('Dubai', 11,	38,	3.7);
new Store('Paris', 20,	38,	2.3);
new Store('Lima', 2,	16,	4.6);


function renderAllStore(){
  renderHeader();
  for(let i = 0; i < shop.length; i++){
    shop[i].cookiesperHour();
    shop[i].render();
  }
}

console.log(shop);
renderAllStore();





// let seattle = {
//   location: 'Seattle',
//   minCust: 23,
//   maxCust: 65,
//   avgCookie: 6.3,
//   cookiesBought: [],
//   totalCookies: 0,

//   custperHour: function(){
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },
//   cookieperHour: function(){
//     for(let i = 0; i < operationHour.length; i++){
//       let hourTotal = Math.ceil(this.custperHour() * this.avgCookie);
//       this.totalCookies += hourTotal;
//       this.cookiesBought.push(hourTotal);
//       console.log(this.totalCookies);
//       // this.cookiesBought.push(Math.ceil(this.custperHour() * this.avgCookie));
      
//     }
//   },
//   render: function(){

//     let ulElem = document.createElement('ul');

//     let pElem = document.createElement('p');
//     pElem.textContent = this.location;
//     cookiesSold.appendChild(pElem);
//     cookiesSold.appendChild(ulElem);
//     for(let i = 0; i < operationHour.length; i++){
//       let liElem = document.createElement('li');
//       liElem.textContent = `${operationHour[i]}: ${this.cookiesBought[i]} cookies`;
//       ulElem.appendChild(liElem);
//     }
//     let liElem = document.createElement('li');
//     liElem.textContent = `Total = ${this.totalCookies} cookies`;
//     ulElem.appendChild(liElem);
//   }
// };


// seattle.cookieperHour();
// seattle.render();

// // console.log(seattle);

// // function sum(a,b){
// //   let a 
// // }
// // For every hour, calculate, how many cookies are purch, based off of the random number cust that comes in. and by the average cookie the cust is buying
// // console.log(seattle.custperHour());



// let tokyo = {
//   location: 'Tokyo',
//   minCust: 3,
//   maxCust: 24,
//   avgCookie: 1.2,
//   cookiesBought: [],
//   totalCookies: 0,

//   custperHour: function(){
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },
//   cookieperHour: function(){
//     for(let i = 0; i < operationHour.length; i++){
//       let hourTotal = Math.ceil(this.custperHour() * this.avgCookie);
//       this.totalCookies += hourTotal;
//       this.cookiesBought.push(hourTotal);
//       console.log(this.totalCookies);
//     }
//   },
//   render: function(){

//     let ulElem = document.createElement('ul');

//     let pElem = document.createElement('p');
//     pElem.textContent = this.location;
//     cookiesSold.appendChild(pElem);
//     cookiesSold.appendChild(ulElem);
//     for(let i = 0; i < operationHour.length; i++){
//       let liElem = document.createElement('li');
//       liElem.textContent = `${operationHour[i]}: ${this.cookiesBought[i]} cookies`;
//       ulElem.appendChild(liElem);
//     }
//     let liElem = document.createElement('li');
//     liElem.textContent = `Total = ${this.totalCookies} cookies`;
//     ulElem.appendChild(liElem);
//   }
// };

// tokyo.cookieperHour();
// tokyo.render();


// let dubai = {
//   location: 'Dubai',
//   minCust: 11,
//   maxCust: 38,
//   avgCookie: 3.7,
//   cookiesBought: [],
//   totalCookies: 0,

//   custperHour: function(){
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },
//   cookieperHour: function(){
//     for(let i = 0; i < operationHour.length; i++){
//       let hourTotal = Math.ceil(this.custperHour() * this.avgCookie);
//       this.totalCookies += hourTotal;
//       this.cookiesBought.push(hourTotal);
//       console.log(this.totalCookies);
//     }
//   },
//   render: function(){

//     let ulElem = document.createElement('ul');

//     let pElem = document.createElement('p');
//     pElem.textContent = this.location;
//     cookiesSold.appendChild(pElem);
//     cookiesSold.appendChild(ulElem);
//     for(let i = 0; i < operationHour.length; i++){
//       let liElem = document.createElement('li');
//       liElem.textContent = `${operationHour[i]}: ${this.cookiesBought[i]} cookies`;
//       ulElem.appendChild(liElem);
//     }
//     let liElem = document.createElement('li');
//     liElem.textContent = `Total = ${this.totalCookies} cookies`;
//     ulElem.appendChild(liElem);
//   }
// };

// dubai.cookieperHour();
// dubai.render();


// let paris = {
//   location: 'Paris',
//   minCust: 20,
//   maxCust: 38,
//   avgCookie: 2.3,
//   cookiesBought: [],
//   totalCookies: 0,

//   custperHour: function(){
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },
//   cookieperHour: function(){
//     for(let i = 0; i < operationHour.length; i++){
//       let hourTotal = Math.ceil(this.custperHour() * this.avgCookie);
//       this.totalCookies += hourTotal;
//       this.cookiesBought.push(hourTotal);
//       console.log(this.totalCookies);
//     }
//   },
//   render: function(){

//     let ulElem = document.createElement('ul');

//     let pElem = document.createElement('p');
//     pElem.textContent = this.location;
//     cookiesSold.appendChild(pElem);
//     cookiesSold.appendChild(ulElem);
//     for(let i = 0; i < operationHour.length; i++){
//       let liElem = document.createElement('li');
//       liElem.textContent = `${operationHour[i]}: ${this.cookiesBought[i]} cookies`;
//       ulElem.appendChild(liElem);
//     }
//     let liElem = document.createElement('li');
//     liElem.textContent = `Total = ${this.totalCookies} cookies`;
//     ulElem.appendChild(liElem);
//   }
// };

// paris.cookieperHour();
// paris.render();


// let lima = {
//   location: 'Lima',
//   minCust: 2,
//   maxCust: 16,
//   avgCookie: 4.6,
//   cookiesBought: [],
//   totalCookies: 0,

//   custperHour: function(){
//     return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },
//   cookieperHour: function(){
//     for(let i = 0; i < operationHour.length; i++){
//       let hourTotal = Math.ceil(this.custperHour() * this.avgCookie);
//       this.totalCookies += hourTotal;
//       this.cookiesBought.push(hourTotal);
//       console.log(this.totalCookies);
//     }
//   },
//   render: function(){

//     let ulElem = document.createElement('ul');

//     let pElem = document.createElement('p');
//     pElem.textContent = this.location;
//     cookiesSold.appendChild(pElem);
//     cookiesSold.appendChild(ulElem);
//     for(let i = 0; i < operationHour.length; i++){
//       let liElem = document.createElement('li');
//       liElem.textContent = `${operationHour[i]}: ${this.cookiesBought[i]} cookies`;
//       ulElem.appendChild(liElem);
//     }
//     let liElem = document.createElement('li');
//     liElem.textContent = `Total = ${this.totalCookies} cookies`;
//     ulElem.appendChild(liElem);
//   }
// };

// lima.cookieperHour();
// lima.render();



// // Varables

// // custperHour

// // cookieperhour

// // render function

// //// For every hour, calculate, how many cookies are purch, based off of the random number cust that comes in. and by the average cookie the cust is buying
// // console.log(seattle.custperHour());







