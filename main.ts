
import "./style.css";
import { todos } from "./todos";

const app = document.getElementById('app')!;

app.innerHTML = `
  <div id="container">
    <h1 id="title">📝 My ToDo List</h1>
    <div id="card">
      <ul id="todo-list"></ul>
    </div>
  </div>
`;

const todoList = document.getElementById('todo-list')!;

function renderTodos() {
  todoList.innerHTML = '';
  
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].completed === false) {
      const li = document.createElement('li');
      li.className = 'todo-item';
      li.id = 'todo-' + i;
      
      const span = document.createElement('span');
      span.className = 'todo-text';
      span.textContent = todos[i].text;
      
      const button = document.createElement('button');
      button.className = 'done-button';
      button.id = 'btn-' + i;
      button.textContent = '✓ Done';
      
      button.addEventListener('click', (function(index) {
        return function() {
          todos[index].completed = true;
          renderTodos();
        };
      })(i));
      
      li.appendChild(span);
      li.appendChild(button);
      todoList.appendChild(li);
    }
  }
  
  if (todoList.children.length === 0) {
    const message = document.createElement('li');
    message.className = 'completion-message';
    message.textContent = '🎉 All tasks completed! Great job!';
    todoList.appendChild(message);
  }
}

renderTodos();