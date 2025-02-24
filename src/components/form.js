import { initColor } from "../utils/todosList"

export default function createForm() {
  const formContainer = document.createElement("div")
  const form = document.createElement("form")
  const input = document.createElement("input")
  const addBtn = document.createElement("button")
  const colorInput = document.createElement("input")

  colorInput.type = "color"
  colorInput.value = initColor

  input.type = "text"
  input.name = "todo-name"
  input.placeholder = "Enter a todo..."
  input.autocomplete = "off"

  addBtn.textContent = "Add"
  addBtn.classList.add("add-btn")

  form.append(input, addBtn, colorInput)
  formContainer.append(form)
  formContainer.classList.add("form-container")

  return formContainer
}
