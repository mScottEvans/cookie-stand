'use strict';


//*************************GLOBAL VARIABLES/IMPORTS********************************

let operationHour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let shop = [];

let myForm = document.getElementById('cookie-form');

let cookiesSold = document.getElementById('cookies-sold');
console.log(cookiesSold);

let tableElem = document.createElement('table');
cookiesSold.appendChild(tableElem);

//******************************CONSTRUCTORS************************************
function Store(name, minCust, maxCust, avgCookie){
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.cookiesBought = [];
  this.totalCookies = 0;

  shop.push(this);
}


//*****************************CONSTRUCTOR METHODS***************************

Store.prototype.getCustPerHour = function(){
  return custPerHour(this.minCust, this.maxCust);
};

Store.prototype.cookiesPerHour = function(){
  for(let i = 0; i < operationHour.length; i++){
    let hourTotal = Math.ceil(this.getCustPerHour() * this.avgCookie);
    this.totalCookies = this.totalCookies + hourTotal;
    this.cookiesBought.push(hourTotal);
  }
  // console.log(this.totalCookies);
  // console.log(this);
};

Store.prototype.render = function(){
  this.cookiesPerHour();

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

//*************************************FUNCTIONS***********************************
function custPerHour(minCust, maxCust){
  return Math.floor(Math.random() * (maxCust - minCust + 1) + minCust);
}

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

for( let i = 0; i < shop.length; i++){
  for( let j = 0; j < shop[i].cookiesBought.length; j++){
    console.log(shop[i].cookiesBought[j]);
  }
}

function renderAllStore(){
  renderHeader();
  for(let i = 0; i < shop.length; i++){
    shop[i].render();
  }
}

//**************************EVENT LISTENERS*******************************

myForm.addEventListener('submit', handleSubmit);


//***************************EVENT HANDLERS********************************
function handleSubmit(event){
  event.preventDefault();

  let cityName = event.target.cityName.value;
  let minCust = +event.target.minCust.value;
  let maxCust = +event.target.maxCust.value;
  let avgCookie = +event.target.avgCookie.value;

  let newStore = new Store(cityName, minCust, maxCust, avgCookie);

  newStore.render();
}


//***************************FUNCTION CALLS*****************************
new Store('Seattle', 23, 65, 6.3);
new Store('Tokyo', 3, 24, 1.2);
new Store('Dubai', 11,	38,	3.7);
new Store('Paris', 20,	38,	2.3);
new Store('Lima', 2,	16,	4.6);

renderAllStore();





