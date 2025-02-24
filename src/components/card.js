export default function card(todo) {
  const div = document.createElement("div")
  const name = document.createElement("p")
  const delBtn = document.createElement("button")
  const date = document.createElement("p")
  const isDone = document.createElement("input")
  const top = document.createElement("div")
  const bot = document.createElement("div")

  name.textContent = todo.name
  delBtn.textContent = "Delete"
  delBtn.classList.add("del-btn")
  date.textContent = todo.date
  isDone.type = "checkbox"
  isDone.checked = todo.done
  isDone.classList.add("is-done")
  
  top.append(name, isDone)
  bot.append(date, delBtn)
  top.classList.add("top-content")
  bot.classList.add("bot-content")
  div.append(top, bot)

  div.classList.add("card")
  div.setAttribute("data-id", todo.id)
  
  div.style.backgroundColor = todo.color;
  if (todo.done) {
    div.classList.add("done")
  }

  return div
}