var submit = document.getElementsByClassName('areasub')[0];

var answ1 = document.getElementById('table-select-1'),
    answ2 = document.getElementById('table-select-2'),
    answ3 = document.getElementById('table-select-3');

var state = document.getElementsByClassName('quiz-state')[0];

submit.addEventListener('click', function(){
   if (answ1.value == '2' && answ2.value == '2' && answ3.value == '1') {
       state.innerHTML = 'Вірно!';
       state.style.color = '#37FF63';
   } else {
       state.innerHTML = 'Невірно!';
       state.style.color = '#FF3737';
   }
});