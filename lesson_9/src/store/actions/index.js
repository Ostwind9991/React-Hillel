import {
  ACTION_ADD_TODO,
  ACTION_DEL_TODO,
  ACTION_TOGGLE_TODO_IS_DONE,
} from "../../constants/index";

export const toogleIsDone = (payload) => ({
  type: ACTION_TOGGLE_TODO_IS_DONE,
  payload,
});

export const onInputDel = (payload) => ({
  type: ACTION_DEL_TODO,
  payload,
});

export const onInputAdd = (payload) => ({
  type: ACTION_ADD_TODO,
  payload,
});
