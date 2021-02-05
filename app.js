'use strict';

let banco = [
    { 'tarefa': 'Estudar Js', 'status': '' },
    { 'tarefa': 'Rezar', 'status': 'checked' },
]

const criarItem = (text, status = '') => {
    const item = document.createElement('label');
    item.classList.add('todo_item');
    item.innerHTML = `
    <input type="checkbox" ${status}>
    <div>${text}</div>
    <input type="button" value="X">
    `
    document.getElementById('todoList').appendChild(item);
}

const limparTarefas = () => {
    const todoList = document.getElementById('todoList');
    while (todoList.firstChild) {
        todoList.removeChild(todoList.lastChild);
    }
}


const atualizarTela = () => {
    limparTarefas();
    banco.forEach(item => criarItem(item.tarefa, item.status));
}


const inserirItem = (evento) => {
    const tecla = evento.key;
    const texto = evento.target.value;
    if (tecla === 'Enter') {
        banco.push({ 'tarefa': texto, 'status': '' });
        atualizarTela();
        evento.target.value = ''
    }
}



document.getElementById('newItem').addEventListener('keypress', inserirItem);












atualizarTela();









































