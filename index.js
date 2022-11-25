




// Haetaan Rajapinta boredBotille
const getActivity = () => {
  fetch("https://www.boredapi.com/api/activity")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById('activity').style.display = "none"
      document.body.classList.add("feature")
      document.getElementById('title').textContent = "HappyBot"
      
      document.getElementById('activity-result').textContent = data.activity
    })
  }


document.getElementById('btn').addEventListener('click', getActivity) 

const addClass = () => {
  const copyBtn = document.getElementById('copyBtn')
  setTimeout(() => copyBtn.classList.remove('hidden'), 500)
  
}
document.getElementById('btn').addEventListener('click', addClass) 


// Luodaan uusi item listaan
function addNewItem() {
  const li = document.createElement('li')
  const addValue = document.getElementById('inputText').value
  const textNode = document.createTextNode(addValue)
  li.appendChild(textNode)

  !addValue ? alert("Write something!") : document.getElementById('to-do-list').appendChild(li)
  
  document.getElementById('inputText').value = ""

  let allTasks = JSON.parse(localStorage.getItem("toDo")) || []
  allTasks.push(addValue)
  localStorage.setItem('toDo', JSON.stringify(allTasks))

 
}


const list = document.querySelector('ul')
list.addEventListener('click', (e) => e.target.classList.toggle('checked')
)






// https://www.freecodecamp.org/news/copy-text-to-clipboard-javascript/
let text = document.getElementById('activity-result')
console.log(typeof text)

  const copyContent = async () => {
    try {
      await navigator.clipboard.writeText(text.value)
      alert('Content copied to clipboard')
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }


// Syöttää inputissa olevat tiedot listaan

document.getElementById('add').addEventListener('click', addNewItem)
document.addEventListener('keydown', function (e) {
if (e.key === "Enter") {
  addNewItem()
}
})



