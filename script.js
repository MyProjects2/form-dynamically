'use strict'
let getData = () => {
    let lastName = prompt('Введите вашу фамилию');

    let firstName = prompt('Введите ваше имя');
    
    let patronymic = prompt('Введите ваше отчество');

    let age = parseInt(prompt('Ваш возраст:'));
    if (isNaN(age)){
        age = parseInt(prompt('Ваш возраст (только цифры):'));
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
    if (lastName == '' || firstName == '' || patronymic == '' || age == '' || lastName == null || firstName == null || patronymic == null || isNaN(age)){
        alert('Некоторые поля были пустыми. Заполните, пожалуйста, анкету');
        getData();
    } else {
        alert(`Ваше ФИО: ${lastName} ${firstName} ${patronymic} \n Ваш возраст в годах: ${age} \n Ваш возраст в днях: ${age*365} \n Через 5 лет вам будет: ${age+5} \n Ваш пол: ${gender} \n Вы на пенсии: ${answer}`);
    }
    
    
}
getData();

