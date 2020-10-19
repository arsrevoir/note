var sub1 = document.getElementById('quest-1'),
    sub2 = document.getElementById('quest-2'),
    sub3 = document.getElementById('quest-3');

var menu1 = document.getElementById('menu-1'),
    menu2 = document.getElementById('menu-2'),
    menu3  = document.getElementById('menu-3');

var task1_answ = document.getElementsByClassName('answ-task1'),
    task2_answ = document.getElementsByClassName('answ-task2'),
    task3_answ = document.getElementsByClassName('answ-task3');


sub1.addEventListener('click', function(){

    var _ = this;

    menu1.style.display = 'block';

    document.body.addEventListener('click', function(e){
        if(e.target !== menu1 && e.target !== _) {
            menu1.style.display = 'none';
        }
    })

    for(var i = 0; i<task1_answ.length; i++) {
        task1_answ[i].addEventListener('click', function () {

            let value = this.getAttribute('data-value');
            let answ = this.getAttribute('data-answ');

            _.setAttribute('data-value', value);

            _.innerText = answ;
            _.classList.add('selected-answer');

        });
    }

});



sub2.addEventListener('click', function(){

    var _ = this;

    menu2.style.display = 'block';

    document.body.addEventListener('click', function(e){
        if(e.target !== menu2 && e.target !== _) {
            menu2.style.display = 'none';
        }
    })

    for(var i = 0; i<task2_answ.length; i++) {
        task2_answ[i].addEventListener('click', function () {

            let value = this.getAttribute('data-value');
            let answ = this.getAttribute('data-answ');

            _.setAttribute('data-value', value);

            _.innerText = answ;
            _.classList.add('selected-answer');

        });
    }

});

sub3.addEventListener('click', function(){

    var _ = this;

    menu3.style.display = 'block';

    document.body.addEventListener('click', function(e){
        if(e.target !== menu3 && e.target !== _) {
            menu3.style.display = 'none';
        }
    })

    for(var i = 0; i<task3_answ.length; i++) {
        task3_answ[i].addEventListener('click', function () {

            let value = this.getAttribute('data-value');
            let answ = this.getAttribute('data-answ');

            _.setAttribute('data-value', value);

            _.innerText = answ;
            _.classList.add('selected-answer');

        });
    }

});


var quiz_check = document.getElementsByClassName('miniquiz-submit')[0],
    state = document.getElementsByClassName('quiz-state')[0];

quiz_check.addEventListener('click', function() {
    var sub1_v = sub1.getAttribute('data-value'),
        sub2_v = sub2.getAttribute('data-value'),
        sub3_v = sub3.getAttribute('data-value');

    if(sub1_v === '1' && sub2_v === '2' && sub3_v === '3') {
        state.innerHTML = 'Вірно!';

        state.style.color = '#37FF63';
    } else {
        state.innerHTML = 'Невірно!';

        state.style.color = '#ff3737';
    }
})