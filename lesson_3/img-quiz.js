var sub = document.getElementsByClassName('areasub')[0];

var q1 = document.getElementById('q1'),
    q2 = document.getElementById('q2'),
    q3 = document.getElementById('q3'),
    q4 = document.getElementById('q4');

var state = document.getElementsByClassName('quiz-state')[0];

sub.addEventListener('click', function (){

    if(q1.value === '2' && q2.value === '2' && q3.value === '1' && q4.value === '3') {
        state.innerHTML = 'Вірно!';
        state.style.color = '#37FF63';
    } else {
        state.innerHTML = 'Невірно!';
        state.style.color = '#ff3737';
    }

});