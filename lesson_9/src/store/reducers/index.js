import {
  ACTION_ADD_TODO,
  ACTION_DEL_TODO,
  ACTION_TOGGLE_TODO_IS_DONE,
} from "../../constants/index";

const INITIAL_STATE = {
  todos: [
    {
      id: "14",
      title: "Сделать утреннюю зарядку",
      isDone: true,
    },
    {
      id: "16",
      title: "Купить продуктьі",
      isDone: false,
    },
    {
      id: "18",
      title: "Сделать домашнее задание",
      isDone: false,
    },
    {
      id: "19",
      title: "Сходить в кино",
      isDone: true,
    },
    {
      id: "20",
      title: "Позвонить другу",
      isDone: false,
    },
  ],
};
export default function reducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case ACTION_TOGGLE_TODO_IS_DONE:
      const newTodos = state.todos.map((todo) =>
        todo.id === payload.id ? { ...todo, isDone: !todo.isDone } : todo
      );
      return { todos: newTodos };
    case ACTION_DEL_TODO:
      const delTodos = state.todos.filter((todo) => todo.id !== payload.id);
      return { todos: delTodos };
    case ACTION_ADD_TODO:
      const arrFood = {};
      let id = state.todos.map((el) => el.id);
      let index = Date.now();
      for (var a = 1; a > 0; a++) {
        if (id.includes(`${index}`)) {
          index++;
        } else {
          arrFood.id = String(index);
          arrFood.title = `${payload}`;
          arrFood.isDone = false;
          break;
        }
      }
      return { todos: [...state.todos, arrFood] };
    default:
      return state;
  }
}
