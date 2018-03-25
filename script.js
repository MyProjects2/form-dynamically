'use strict'
var formDef1=
[
  {label:'Название сайта:',kind:'longtext',name:'sitename'},
  {label:'URL сайта:',kind:'longtext',name:'siteurl'},
  {label:'Посетителей в сутки:',kind:'number',name:'visitors'},
  {label:'E-mail для связи:',kind:'shorttext',name:'email'},
  {label:'Рубрика каталога:',kind:'combo',name:'division',
    variants:[{text:'здоровье',value:1},{text:'домашний уют',value:2},{text:'бытовая техника',value:3}]},
  {label:'Размещение:',kind:'radio',name:'payment',
    variants:[{text:'бесплатное',value:1},{text:'платное',value:2},{text:'VIP',value:3}]},
  {label:'Разрешить отзывы:',kind:'check',name:'votes'},
  {label:'Описание сайта:',kind:'memo',name:'description'},
  {label:'Опубликовать:',kind:'submit'},
];

var formDef2=
[
  {label:'Фамилия:',kind:'longtext',name:'lastname'},
  {label:'Имя:',kind:'longtext',name:'firstname'},
  {label:'Отчество:',kind:'longtext',name:'secondname'},
  {label:'Возраст:',kind:'number',name:'age'},
  {label:'Зарегистрироваться:',kind:'submit'},
];

function buildForm(array) {
    var form, table, tr, tdLabel, tdInput, kind, option, radio, span;

    form = document.createElement('form');
    form.action = 'http://fe.it-academy.by/TestForm.php';
    form.method = 'POST';
    form.target = '_blank';
    table = document.createElement('table');
    form.appendChild(table);

    function buildTree() {
        tr = document.createElement('tr');
        tdLabel = document.createElement('td');
        tdInput = document.createElement('td');
        tdLabel.innerHTML = array[i].label;
        tdLabel.className = 'label';
        tdInput.appendChild(kind);
        tr.appendChild(tdLabel);
        tr.appendChild(tdInput);
        table.appendChild(tr);
    }

    for (var i = 0; i < array.length; i++) {
        if (array[i].kind === 'longtext') {
            kind = document.createElement('input');
            kind.type = 'text';
            kind.name = array[i].name;
            kind.style.width = '453px';
            buildTree();
        }
        
        if (array[i].kind === 'shorttext') {
            kind = document.createElement('input');
            kind.type = 'text';
            kind.name = array[i].name;
            kind.style.width = '200px';
            buildTree();
        }
        
        if (array[i].kind === 'number') {
            kind = document.createElement('input');
            kind.type = 'text';
            kind.name = array[i].name;
            kind.style.width = '80px';
            buildTree();
        }
        
        if (array[i].kind === 'combo') {
            kind = document.createElement('select');
            kind.name = array[i].name;
            kind.style.width = '204px';
            option = document.createElement('option');
            span = document.createElement('span');
            option.appendChild(span);
            for (var j=0; j < array[i].variants.length; j++){
                span.innerHTML = array[i].variants[j].text;
                option.value = array[i].variants[j].value;
                kind.appendChild(option.cloneNode(true));                 
            } 
            buildTree(); 
        }

        if (array[i].kind === 'radio') {
            kind = document.createElement('td');
            for (var k=0; k < array[i].variants.length; k++) {    
                radio = document.createElement('input');
                radio.type = 'radio';
                radio.name = array[i].name;
                radio.value = array[i].variants[k].value;
                radio.cloneNode(true);
                span = document.createElement('span');
                span.className='radio-text';
                span.cloneNode(true);                    
                span.innerHTML = array[i].variants[k].text;
                kind.appendChild(radio);
                kind.appendChild(span);
            }
            buildTree();
        }

        if (array[i].kind === 'check') {
            kind = document.createElement('input');
            kind.type = 'checkbox';
            kind.name = array[i].name;
            kind.checked=true;
            buildTree();
        }

        if (array[i].kind === 'memo') {
            kind = document.createElement('textarea');
            kind.name = array[i].name;
            kind.style.width = '453px';
            kind.style.height = '50px';
            buildTree();
        }

        if (array[i].kind === 'submit') {
            kind = document.createElement('input');
            kind.type = 'submit';
            kind.value = array[i].label;
            tr = document.createElement('tr');
            tdInput = document.createElement('td');
            tdInput.appendChild(kind);
            tr.appendChild(tdInput);
            table.appendChild(tr);
            form.appendChild(table);
        }
        

    }
    return form;
}

document.getElementsByTagName('body')[0].appendChild(buildForm(formDef1));

document.getElementsByTagName('body')[0].appendChild(buildForm(formDef2));
