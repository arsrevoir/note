var submit = document.getElementsByClassName('miniquiz-submit')[0],
    miniquiz_contain = document.getElementsByClassName('miniquiz-container')[0],
    miniquiz_header = document.getElementsByClassName('quiz-header__content')[0],
    quiz_state = document.getElementsByClassName('quiz-state')[0];

var quests1 = document.getElementById('quiz-quest1'),
    quests2 = document.getElementById('quiz-quest2'),
    quests3 = document.getElementById('quiz-quest3'),
    quests4 = document.getElementById('quiz-quest4');

submit.addEventListener('click', function(e) {
    e.preventDefault();

    if(quests1.checked === true && quests2.checked === false && quests3.checked === true && quests4.checked === true) {
        miniquiz_contain.style.borderColor = '#37FF63';
        miniquiz_header.style.borderColor = '#37FF63';

        quiz_state.style.color = '#37FF63';
        quiz_state.innerHTML = 'Вірно!';
    } else {
        miniquiz_contain.style.borderColor = '#FF3737';
        miniquiz_header.style.borderColor = '#FF3737';

        quiz_state.style.color = '#FF3737';
        quiz_state.innerHTML = 'Невірно!';
    }
});