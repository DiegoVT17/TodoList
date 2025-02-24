import createCardsGrid from "../components/grid.js"
import todos from "../utils/todosList.js"

function changeStatus() {
  const gridContainer = document.querySelector(".grid-container");
  const storeTodos = JSON.parse(localStorage.getItem("todos")) || todos
  
  gridContainer.addEventListener("change", (e) => {
    if (e.target.matches("input[type='checkbox']")) {
      const card = e.target.closest(".card");
      const id = Number(card.dataset.id);
      
      const todo = storeTodos.find(t => t.id === id);
      console.log(todo)
      todo.done = !todo.done;

      if (todo.done) {
        card.classList.add("done")
      } else {
        card.classList.remove("done")
      }

      localStorage.setItem("todos", JSON.stringify(storeTodos));
    }
  });
}

function deleteListener() {
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("del-btn")) {
      const storeTodos = JSON.parse(localStorage.getItem("todos")) || todos
  
      const card = e.target.closest(".card")
      const id = Number(card.dataset.id)
      
      const index = storeTodos.findIndex(todo => todo.id === id);
      if (index !== -1) {
        storeTodos.splice(index, 1)
      }

      localStorage.setItem("todos", JSON.stringify(storeTodos))

      const gridContainer = document.querySelector(".grid-container");
      gridContainer?.replaceWith(createCardsGrid(storeTodos));
    }
  });
}

export { changeStatus, deleteListener }