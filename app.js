const form = document.getElementById('task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.getElementById('filter');
const taskInput = document.getElementById('task');

loadEventListener();

function loadEventListener(){
  form.addEventListener('submit', addTask)
}

function addTask(e){
  
  if(taskInput.value === ''){
    alert('Necesitas agregar una tarea');
  } else {
  const li = document.createElement('li');
  
  li.className = 'collection-item';
  li.appendChild(document.createTextNode(taskInput.value));
  const link = document.createElement('a');
  link.className='delete-item secondary-content';
  link.innerHTML = '<i class="fa fa-remove" ></i>';
  
  li.appendChild(link);
  taskList.appendChild(li);
  taskInput.value = '';
  console.log(li);
  }
  e.preventDefault();
}




