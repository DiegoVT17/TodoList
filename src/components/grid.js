import todos from "../utils/todosList.js"
import card from "./card.js"

export default function createCardsGrid(todos) {
  const main = document.createElement("main")
  main.classList.add("grid-container")
  main.innerHTML = ""

  for (let i = 0; i < todos.length; i++) {
    const item = card(todos[i])
    main.append(item)
  }

  return main
}