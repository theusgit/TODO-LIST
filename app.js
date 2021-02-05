'use strict';

/* <label class="todo_item">
                <input type="checkbox">
                <div>teste de item 1</div>
                <input type="button" value="X">
            </label> */

const criarItem = (tarefa, status) => {
    const item = document.createElement('label');
    item.classList.add('todo_item');
    item.innerHTML = `
    <input type="checkbox" ${status}>
    <div>${tarefa}</div>
    <input type="button" value="X">
    `
    document.getElementById('todoList').appendChild(item);
}