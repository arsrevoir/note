var task = document.getElementsByClassName('js-header-task-num')[0],
    task_submit = document.getElementsByClassName('test-submit')[0],
    task_input = document.getElementsByClassName('test-input')[0],
    invalid_task = document.getElementsByClassName('invalid-answer"')[0],
    task_contain = document.getElementsByClassName('test-answer')[0];

function generate_num(digits) {
    if(digits == 2) {
        return analyzeNumber(getRandomInt_range(10, 99));
    } else if(digits == 3) {
        return analyzeNumber(getRandomInt_range(100, 999));
    }
}

function getRandomInt_range(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const num_table = {
    'hundreds': {
        '1': 'сто',
        '2': 'двести',
        '3': 'триста',
        '4': 'четыреста',
        '5': 'пятьсот',
        '6': 'шестьсот',
        '7': 'семьсот',
        '8': 'восемьсот',
        '9': 'девятьсот'
    },

    'ten': {
        '10': 'десять',
        '11': 'одиннадцать',
        '12': 'двенадцать',
        '13': 'тринадцать',
        '14': 'четырнадцать',
        '15': 'пятнадцать',
        '16': 'шестнадцать',
        '17': 'семнадцать',
        '18': 'восемнадцать',
        '19': 'девятнадцать'
    },

    'tens': {
        '0': '',
        '2': 'двадцать',
        '3': 'тридцать',
        '4': 'сорок',
        '5': 'пятьдесят',
        '6': 'шестьдесят',
        '7': 'семьдесят',
        '8': 'восемьдесят',
        '9': 'девяносто',
    },

    'units': {
        '0': '',
        '1': 'один',
        '2': 'два',
        '3': 'три',
        '4': 'четыре',
        '5': 'пять',
        '6': 'шесть',
        '7': 'семь',
        '8': 'восемь',
        '9': 'девять',
    }
};


function analyzeNumber(num) {

    var digits = num.toString(),
        num_word='',
        hundreds = '',
        tens = '';

    if(digits.length == 2) {

        if(digits[0] == '1') {
            let num = digits[0] + digits[1];
            num_word += '' + num_table['ten'][num];
        } else {
            if(digits[1] == '0') {
                num_word += num_table['tens'][digits[0]];
            } else {
                num_word += num_table['tens'][digits[0]] + ' ' + num_table['units'][digits[1]];
            }
        }

    } else if(digits.length == 3) {
        num_word += num_table['hundreds'][digits[0]];
        hundreds = num_table['hundreds'][digits[0]];

        if(digits[1] == '1') {
            let num = digits[1] + digits[2];
            num_word += ' ' + num_table['ten'][num];
            tens += ' ' + num_table['ten'][num];
        } else {
            if(digits[1] == '0' && digits[2] !== '0') {
                num_word += ' ' + num_table['units'][digits[2]];
                tens += ' ' + num_table['units'][digits[2]];

            } else if(digits[1] !== '0' && digits[2] == '0') {
                num_word += ' ' + num_table['tens'][digits[1]];
                tens += ' ' + num_table['tens'][digits[1]];

            } else if(digits[1] == '0' && digits[2] == '0') {

            } else if(digits[1] !== '0' && digits[2] !== '0') {
                num_word += ' ' + num_table['tens'][digits[1]] + ' ' + num_table['units'][digits[2]];
                tens += ' ' + num_table['tens'][digits[1]] + ' ' + num_table['units'][digits[2]];

            }
        }
    }

    return {
        'num': num,
        'word': num_word,
        'hundreds': hundreds,
        'tens': tens
    };
}

var user_answer_contain = document.getElementsByClassName('js-invalid-answer')[0],
    answer_form = document.getElementById('answer'),
    invalid_answer_exp = document.getElementById('invalid-answer'),
    right_answer_p = document.getElementsByClassName('js-right-answer-include')[0],
    exp_right_answer_num = document.getElementsByClassName('js-expl-right-answ-num')[0],
    exp_right_answer_word = document.getElementsByClassName('js-expl-right-answ-word')[0],
    tryagain_butt = document.getElementsByClassName('js-invalid-answer_tryagain-button')[0],
    valid_answer = document.getElementById('valid-answer'),
    valid_answer_span = document.getElementsByClassName('js-valid-answer')[0],
    next_question_butt = document.getElementsByClassName('js-valid-answer_button')[0];

var lesson_end = document.getElementById('lesson_end'),
    lesson_test = document.getElementById('test'),
    bottom_nav = document.getElementsByClassName('bottom-nav__buttons')[0],
    hunders_span = document.getElementsByClassName('js-invalid-answer_exp-hundreds')[0],
    tens_span = document.getElementsByClassName('js-invalid-answer_exp-tens')[0];

var digits = 3;

var page = 1;

var task_num = generate_num(digits);

user_answer_contain.innerHTML = task_num['word'];

task.innerHTML = task_num['num'];

function task_form_submit() {
    task_submit.addEventListener('click', function() {
        if(task_input.value.toLocaleLowerCase() == task_num['word']) {
            answer_form.style.display = 'none';

            valid_answer.style.display = 'block';
            valid_answer_span.innerHTML = task_num['word'];

            next_question_butt.addEventListener('click', function() {
                answer_form.style.display = 'block';

                valid_answer.style.display = 'none';

                task_num = generate_num(digits);

                user_answer_contain.innerHTML = task_num['word'];

                task.innerHTML = task_num['num'];

                task_input.value = '';

                if(page == 6) {
                    lesson_test.style.display = 'none';
                    lesson_end.style.display = 'block';

                    bottom_nav.innerHTML = `
                        <a href="../index.html"><button class="medium-stroke-button">На главную</button></a>
                        <a href="lesson_p-4.html"><button class="medium-stroke-button">Следующий урок</button></a>
                    `;

                }
            });

            page++;
        } else {
            answer_form.style.display = 'none';

            invalid_answer_exp.style.display = 'block';

            user_answer_contain.innerHTML = task_input.value;
            right_answer_p.innerHTML = task_num['word'];
            exp_right_answer_num.innerHTML = task_num['num'];
            exp_right_answer_word.innerHTML = task_num['word'];

            hunders_span.innerHTML = task_num['hundreds'];
            tens_span.innerHTML = task_num['tens'];

            tryagain_butt.addEventListener('click', function(){
                answer_form.style.display = 'block';

                invalid_answer_exp.style.display = 'none';

                task_num = generate_num(digits);

                user_answer_contain.innerHTML = task_num['word'];

                task.innerHTML = task_num['num'];
            })
        }
    });
}

task_form_submit();
