import "./styles.css";
import { addTodo } from "./listeners/formListener.js";
import createCardsGrid from "./components/grid.js";
import createHeader from "./components/header.js";
import createForm from "./components/form.js";
import { changeStatus, deleteListener } from "./listeners/btnListener.js";
import todos from "./utils/todosList.js";

const root = document.querySelector(".root");

function init() {
  const storedTodos = localStorage.getItem("todos");
  const initTodos = storedTodos ? JSON.parse(storedTodos) : todos;
  const header = createHeader();
  const form = createForm();
  const grid = createCardsGrid(initTodos);

  root.append(header, form, grid);
  addTodo();
  changeStatus();
  deleteListener();
}

init();
