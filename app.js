const form = document.getElementById('task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.getElementById('filter');
const taskInput = document.getElementById('task');

loadEventListener();

function loadEventListener(){
  form.addEventListener('submit', addTask);
  taskList.addEventListener('click', removeTasks);
  clearBtn.addEventListener('click', clearTasks)
  filter.addEventListener('keyup', filterTasks)
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
  }
  e.preventDefault();
  
}

function removeTasks(e){
  if(e.target.parentElement.classList.contains('delete-item')){
    if(confirm("Estas seguro que queres borrar esta tarea?")){
      e.target.parentElement.parentElement.remove();
    } 
  } 
}

function clearTasks(){
  let myArr = Array.from(taskList.children)
  myArr.forEach(element => element.remove());
}

function filterTasks(e){
  const text = e.target.value.toLowerCase();
  
  document.querySelectorAll('.collection-item').forEach(
    function(task){
      const item = task.firstChild.textContent;
      if(item.toLowerCase().indexOf(text)!= -1){
        task.style.display = 'block';
      } else {
        task.style.display = 'none';
      }
    }
  )
}








