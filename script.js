'use strict'
    let lastName = prompt('Введите вашу фамилию');
    while(lastName == '' || lastName == null){
        lastName = prompt('Введите вашу фамилию');
    } 
    let firstName = prompt('Введите ваше имя');
    while (firstName == '' || firstName == null){
        firstName = prompt('Введите ваше имя');
    }
    let patronymic = prompt('Введите ваше отчество');
    while (patronymic == '' || patronymic == null){
        patronymic = prompt('Введите ваше отчество');
    }
    let age = parseInt(prompt('Ваш возраст:'));
    while (isNaN(age) || age == ''){
        age = parseInt(prompt('Ваш возраст:'));
    }
    let gender = confirm('Ваш пол мужской? Если так, нажмите "OK", если женский нажмите "Отмена"');
    
    let retireMen = 63;
    let retireWomen = 58;
    var answer;

    if (gender == true) {
        gender = 'мужской';
        answer = (retireMen > age)? 'нет': 'да';
    }
    else {
        gender = 'женский';
        answer = (retireWomen > age)? 'нет': 'да';
    }
  
    alert(`Ваше ФИО: ${lastName} ${firstName} ${patronymic} \n Ваш возраст в годах: ${age} \n Ваш возраст в днях: ${age*365} \n Через 5 лет вам будет: ${age+5} \n Ваш пол: ${gender} \n Вы на пенсии: ${answer}`);


