
let toDos = []

const inputEl = document.getElementById('inputText')
const inputBtn = document.getElementById('add-btn')
const deleteBtn = document.getElementById('delete-btn')
const ulEl = document.getElementById('to-do-list')

const toDoFromLocalStorage = JSON.parse(localStorage.getItem('toDo'))
const list = document.querySelector('ul')


if(toDoFromLocalStorage) {
  toDos = toDoFromLocalStorage
  render(toDos)
}

function addNewItem(){
  if(!inputEl.value) {
    alert("Write something!")
  } else {
  toDos.push(inputEl.value)
  inputEl.value = ""
  localStorage.setItem('toDo', JSON.stringify(toDos))
  render(toDos)
  }
}

inputBtn.addEventListener('click', addNewItem)

function render(todo) {
  let listItems = ""
  for (let i = 0; i < todo.length; i++) {
    listItems += `
      <li>
        ${todo[i]}
      </li>
    `
  }
  ulEl.innerHTML = listItems
}


// Tyhjentää listan
deleteBtn.addEventListener('dblclick', () =>  {
  localStorage.clear()
  toDos = []
  render(toDos)
})

list.addEventListener('click', (e) => e.target.classList.toggle('checked')
)

// Syöttää inputissa olevat tiedot listaan
document.addEventListener('keydown', function (e) {
if (e.key === "Enter") {
  addNewItem()
}
})




