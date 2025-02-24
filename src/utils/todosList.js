import { format } from "date-fns";

const todos = [
  {
    id: 1,
    name: "make a todo list",
    date: format(new Date(), "dd-MM"),
    done: false,
    color: "#D2E0FB",
  },
  {
    id: 2,
    name: "listening to some music",
    date: format(new Date(), "dd-MM"),
    done: false,
    color: "#D2E0FB",
  },
];

export const initColor = "#D2E0FB";

export default todos;
