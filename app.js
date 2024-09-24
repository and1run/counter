const counterP = document.getElementsByTagName('p');
const btnPlus = document.getElementById('plus');
const btnReset = document.getElementById('reset');
const btnMinus = document.getElementById('minus');
var counter = 0;

counterP[0].textContent = counter;

btnPlus.addEventListener('click',()=>{
    counter ++;
    counterP[0].textContent = counter;
});

btnMinus.addEventListener('click',()=>{
    counter --;
    counterP[0].textContent = counter;
});

btnReset.addEventListener('click',()=>{
    counter = 0;
    counterP[0].textContent = counter;
});


