let todos = [];

document.addEventListener('DOMContentLoaded', () => {
  // todos 데이터를 JSON형태로 '파싱'하고, 값이 없으면 빈 배열을 사용하도록 할 예정
  todos = JSON.parse(localStorage.getItem('todos')) || [];
  renderTodos(todos);
})

// 할 일 추가하는 함수
function addTodo(){
  const input = document.getElementById('todo-input');
  const newTodo = input.value.trim();

  if(newTodo){
    todos.push(newTodo);
    localStorage.setItem('todos', JSON.stringify(todos));
    renderTodos(todos);
    input.value='';
  }
}

function renderTodos(todos){
  const list = document.getElementById('todo-list');
  list.innerHTML = '';

  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    li.textContent = todos[index];

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '삭제';

    deleteBtn.onclick = () => removeTodo(index);

    deleteBtn.classList.add('deleteBtn');

    li.appendChild(deleteBtn);
    list.appendChild(li);
  });
}

// 3. 할 일을 삭제하는 함수
function removeTodo(index){
  todos.splice(index, 1);
  localStorage.setItem('todos', JSON.stringify(todos));
  renderTodos(todos);
}