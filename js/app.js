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

let operationHour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


let cookiesSold= document.getElementById('cookies-sold');




let seattle = {
  location: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3,
  cookiesBought: [],
  totalCookies: 0,

  custperHour: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  cookieperHour: function(){
    for(let i = 0; i < operationHour.length; i++){
      let hourTotal = Math.ceil(this.custperHour() * this.avgCookie);
      this.totalCookies += hourTotal;
      this.cookiesBought.push(hourTotal);
      console.log(this.totalCookies);
      // this.cookiesBought.push(Math.ceil(this.custperHour() * this.avgCookie));
      
    }
  },
  render: function(){

    let ulElem = document.createElement('ul');

    let pElem = document.createElement('p');
    pElem.textContent = this.location;
    cookiesSold.appendChild(pElem);
    cookiesSold.appendChild(ulElem);
    for(let i = 0; i < operationHour.length; i++){
      let liElem = document.createElement('li');
      liElem.textContent = `${operationHour[i]}: ${this.cookiesBought[i]} cookies`;
      ulElem.appendChild(liElem);
    }
    let liElem = document.createElement('li');
    liElem.textContent = `Total = ${this.totalCookies} cookies`;
    ulElem.appendChild(liElem);
  }
};


seattle.cookieperHour();
seattle.render();

// console.log(seattle);

// function sum(a,b){
//   let a 
// }
// For every hour, calculate, how many cookies are purch, based off of the random number cust that comes in. and by the average cookie the cust is buying
// console.log(seattle.custperHour());



let tokyo = {
  location: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookie: 1.2,
  cookiesBought: [],
  totalCookies: 0,

  custperHour: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  cookieperHour: function(){
    for(let i = 0; i < operationHour.length; i++){
      let hourTotal = Math.ceil(this.custperHour() * this.avgCookie);
      this.totalCookies += hourTotal;
      this.cookiesBought.push(hourTotal);
      console.log(this.totalCookies);
    }
  },
  render: function(){

    let ulElem = document.createElement('ul');

    let pElem = document.createElement('p');
    pElem.textContent = this.location;
    cookiesSold.appendChild(pElem);
    cookiesSold.appendChild(ulElem);
    for(let i = 0; i < operationHour.length; i++){
      let liElem = document.createElement('li');
      liElem.textContent = `${operationHour[i]}: ${this.cookiesBought[i]} cookies`;
      ulElem.appendChild(liElem);
    }
    let liElem = document.createElement('li');
    liElem.textContent = `Total = ${this.totalCookies} cookies`;
    ulElem.appendChild(liElem);
  }
};

tokyo.cookieperHour();
tokyo.render();


let dubai = {
  location: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgCookie: 3.7,
  cookiesBought: [],
  totalCookies: 0,

  custperHour: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  cookieperHour: function(){
    for(let i = 0; i < operationHour.length; i++){
      let hourTotal = Math.ceil(this.custperHour() * this.avgCookie);
      this.totalCookies += hourTotal;
      this.cookiesBought.push(hourTotal);
      console.log(this.totalCookies);
    }
  },
  render: function(){

    let ulElem = document.createElement('ul');

    let pElem = document.createElement('p');
    pElem.textContent = this.location;
    cookiesSold.appendChild(pElem);
    cookiesSold.appendChild(ulElem);
    for(let i = 0; i < operationHour.length; i++){
      let liElem = document.createElement('li');
      liElem.textContent = `${operationHour[i]}: ${this.cookiesBought[i]} cookies`;
      ulElem.appendChild(liElem);
    }
    let liElem = document.createElement('li');
    liElem.textContent = `Total = ${this.totalCookies} cookies`;
    ulElem.appendChild(liElem);
  }
};

dubai.cookieperHour();
dubai.render();


let paris = {
  location: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgCookie: 2.3,
  cookiesBought: [],
  totalCookies: 0,

  custperHour: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  cookieperHour: function(){
    for(let i = 0; i < operationHour.length; i++){
      let hourTotal = Math.ceil(this.custperHour() * this.avgCookie);
      this.totalCookies += hourTotal;
      this.cookiesBought.push(hourTotal);
      console.log(this.totalCookies);
    }
  },
  render: function(){

    let ulElem = document.createElement('ul');

    let pElem = document.createElement('p');
    pElem.textContent = this.location;
    cookiesSold.appendChild(pElem);
    cookiesSold.appendChild(ulElem);
    for(let i = 0; i < operationHour.length; i++){
      let liElem = document.createElement('li');
      liElem.textContent = `${operationHour[i]}: ${this.cookiesBought[i]} cookies`;
      ulElem.appendChild(liElem);
    }
    let liElem = document.createElement('li');
    liElem.textContent = `Total = ${this.totalCookies} cookies`;
    ulElem.appendChild(liElem);
  }
};

paris.cookieperHour();
paris.render();


let lima = {
  location: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgCookie: 4.6,
  cookiesBought: [],
  totalCookies: 0,

  custperHour: function(){
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  cookieperHour: function(){
    for(let i = 0; i < operationHour.length; i++){
      let hourTotal = Math.ceil(this.custperHour() * this.avgCookie);
      this.totalCookies += hourTotal;
      this.cookiesBought.push(hourTotal);
      console.log(this.totalCookies);
    }
  },
  render: function(){

    let ulElem = document.createElement('ul');

    let pElem = document.createElement('p');
    pElem.textContent = this.location;
    cookiesSold.appendChild(pElem);
    cookiesSold.appendChild(ulElem);
    for(let i = 0; i < operationHour.length; i++){
      let liElem = document.createElement('li');
      liElem.textContent = `${operationHour[i]}: ${this.cookiesBought[i]} cookies`;
      ulElem.appendChild(liElem);
    }
    let liElem = document.createElement('li');
    liElem.textContent = `Total = ${this.totalCookies} cookies`;
    ulElem.appendChild(liElem);
  }
};

lima.cookieperHour();
lima.render();
