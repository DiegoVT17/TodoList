import createCardsGrid from "../components/grid.js"
import { format } from "date-fns"
import todos from "../utils/todosList.js"
import { initColor } from "../utils/todosList.js"
import card from "../components/card.js"

function addTodo() {
  const form = document.querySelector("form")
  const color = document.querySelector("input[type='color']")

  form.addEventListener("submit", (e) => {
    e.preventDefault()
    const name = document.querySelector("input").value

    if (!name) {
      alert("enter the todo name")
      return;
    }
  
    const storeTodos = JSON.parse(localStorage.getItem("todos")) || todos

    const todo = {id: storeTodos.length + 1, name, date: format(new Date(), "dd-MM"), done: false, color: color.value}
    storeTodos.push(todo)
    
    localStorage.setItem("todos", JSON.stringify(storeTodos))

    document.querySelector("input").value = ""
    color.value = initColor

    const gridContainer = document.querySelector(".grid-container")
    gridContainer.appendChild(card(todo))
  })
}

export { addTodo }