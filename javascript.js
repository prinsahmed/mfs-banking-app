// js for login
if(document.getElementById('loginbtn')){
    document.getElementById('loginbtn').addEventListener('click', function(e){
    e.preventDefault();
    const AccNumber = 1234567;
    const AccPin = 1234;
    const getAccNumber = parseInt(document.getElementById('acc-Number').value);
    const getAccPin = parseInt(document.getElementById('acc-Pin').value);
    if(AccNumber == getAccNumber && AccPin == getAccPin){
        window.location.href = "home.html";
    }
    else{
        alert('Provide your correct information!');
    }
});
};

// home 
const formDisp = document.getElementsByClassName('form_container');
    for(let ele of formDisp){
        ele.classList.add('hidden');
    }
    // reduce code
    function add(Disp){
        Disp.classList.remove('hidden');
        Disp.classList.add('block')
    }
    // remove
    function remove(element1, element2, element3, element4, element5){

    document.getElementById(element1).classList.add('hidden');
    document.getElementById(element2).classList.add('hidden');
    document.getElementById(element3).classList.add('hidden');
    document.getElementById(element4).classList.add('hidden');
    document.getElementById(element5).classList.add('hidden');
    
    }
    
// add money
document.getElementById('addmoney').addEventListener('click', function(){
    const Disp = document.getElementById('add-money-form');
    add(Disp);
    remove('cashout-form', 'transfer-form', 'bonus-form', 'bill-form', 'transaction-form');
    
    
});
// cashout
document.getElementById('cashout').addEventListener('click', function(){
    const cashDisp = document.getElementById('cashout-form');
    add(cashDisp);
    remove('add-money-form', 'transfer-form', 'bonus-form', 'bill-form', 'transaction-form');

});
// transfer
document.getElementById('transfer').addEventListener('click', function(){
    const cashDisp = document.getElementById('transfer-form');
    add(cashDisp);
    remove('cashout-form', 'add-money-form', 'bonus-form', 'bill-form', 'transaction-form');
    
});
// getbonus
document.getElementById('getbonus').addEventListener('click', function(){
    const cashDisp = document.getElementById('bonus-form');
    add(cashDisp);
    remove('cashout-form', 'transfer-form', 'add-money-form', 'bill-form', 'transaction-form');

});
// paybill
document.getElementById('paybill').addEventListener('click', function(){
    const cashDisp = document.getElementById('bill-form');
    add(cashDisp);
    remove('cashout-form', 'transfer-form', 'bonus-form', 'add-money-form', 'transaction-form');

});
document.getElementById('transaction').addEventListener('click', function(){
    const cashDisp = document.getElementById('transaction-form');
    add(cashDisp);
    remove('cashout-form', 'transfer-form', 'bonus-form', 'bill-form', 'add-money-form');

});
// log out 
document.getElementById('log').addEventListener('click', function (){
    window.location.href = 'log in.html'
});
// calculation
// adding money

document.querySelector('.btn1').addEventListener('click', function() {
    const AccNumber = 1234567;
    const pin = 1234;
    const getAccNumber = parseInt(document.getElementById('accNumber').value);
    const getAccPin = parseInt(document.getElementById('accPin').value);
    const remainBal = parseInt(document.getElementById('balance').innerText);
        const getNewBal = parseInt(document.getElementById('addBal').value);
    if(AccNumber === getAccNumber && pin === getAccPin){
        
        const totalBal = remainBal + getNewBal;
        document.getElementById('balance').innerText = totalBal;

    }
    else{
        alert('Enter your valid information!')
    }
});
 
