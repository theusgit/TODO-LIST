'use strict';

let banco=[
    {'tarefa': 'Estudar Js', 'status': ''},
    {'tarefa': 'Rezar', 'status': 'checked'},
]

const criarItem = (text, status='') => {
    const item = document.createElement('label');
    item.classList.add('todo_item');
    item.innerHTML = `
    <input type="checkbox" ${status}>
    <div>${text}</div>
    <input type="button" value="X">
    `
    document.getElementById('todoList').appendChild(item);
}

const atualizarTela= ()=>{
    banco.forEach(item=>criarItem(item.tarefa, item.status));
}

atualizarTela();