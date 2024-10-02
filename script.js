'use strict';
let menuIcon = document.querySelector('.navbar-toggler img');
const bambooRadioBtn = document.getElementById('choice2');
const blackRadioBtn = document.getElementById('choice3');
const bambooConfirmBtn  = document.querySelector('.confirm-bamboo-btn');
const blackConfirmBtn = document.querySelector('.confirm-black-btn');
const pledgeBamboo = document.querySelector('.bamboo-pledge');
const pledgeBlack = document.querySelector('.black-pledge');
let bambooStock = document.querySelectorAll('.bamboo-stock .num');
let blackStock = document.querySelectorAll('.black-stock .num');
let moneyAmount = document.querySelector('.money-amount .amount');
let totalBackers = document.querySelector('.backers .amount');
const backingBtn = document.querySelector('.back-btn');
let bambooInputValue = document.getElementById('bamboo-value');
let blackInputValue = document.getElementById('black-value');


const toggleMenuIcon = ()=>{    
    let menuIconAttr = menuIcon.getAttribute('src');
    if(menuIconAttr == './images/icon-hamburger.svg'){
        menuIcon.setAttribute('src','./images/icon-close-menu.svg')
    }else{
        menuIcon.setAttribute('src','./images/icon-hamburger.svg')
    }
}

const pledgeAction = (stocks,pledgeVal)=>{
    stocks.forEach(stock=>{
        let newStock = parseInt(stock.textContent) - 1;
        return stock.textContent = newStock;
    })

    let money = parseInt((moneyAmount.textContent).replace(/,/g, "").match(/(\d+)/));
    let inpt = parseInt(pledgeVal.value);
      let newAmount = money + inpt;
       return moneyAmount.textContent = `$${newAmount.toLocaleString()}`; 
       
}



menuIcon.addEventListener('click', toggleMenuIcon);

// Bamboo Event Handlers
bambooRadioBtn.addEventListener('change',() =>{
pledgeBamboo.querySelectorAll('.col-12')[1].classList.remove('d-none');
pledgeBlack.querySelectorAll('.col-12')[1].classList.add('d-none');

});
bambooConfirmBtn.addEventListener('click', ()=>{
    pledgeAction(bambooStock,bambooInputValue);
  
});

// Black Event Handlers
blackRadioBtn.addEventListener('change',() =>{
    pledgeBlack.querySelectorAll('.col-12')[1].classList.remove('d-none');
    pledgeBamboo.querySelectorAll('.col-12')[1].classList.add('d-none');
});

blackConfirmBtn.addEventListener('click', ()=>{
    pledgeAction(blackStock,blackInputValue)
  });

//  Back Project Handler
backingBtn.addEventListener('click', ()=>{
    let backerNumbers = parseInt(totalBackers.textContent.replace(/,/g, ""));
    let newBackers = backerNumbers + 1;
    return totalBackers.textContent = newBackers.toLocaleString();
    // new Intl.NumberFormat('en-US').format(totalBackers.textContent);
   /*  console.log(newBackers); */
});

