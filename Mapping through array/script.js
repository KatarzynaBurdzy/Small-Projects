let data = [
    {
        name: 'Mateo',
        age: '32',
    },
    {
        name: 'Sylvia',
        age: '27',
    },
    {
        name: 'Tom',
        age: '44',
    },
    {
        name: 'Miranda',
        age: '23',
    },
    {
        name: 'Tim',
        age: '28',
    },
    {
        name: 'Dalia',
        age: '39',
    }
];

const info = document.querySelector('#info');

let details = data.map(function(item) {
    return'<div>' + item.name + ' is ' + item.age + ' years old' + '</div>';
});

info.innerHTML = details.join('\n');