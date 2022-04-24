import api from "../api/api";
import { USERS_URI } from "../constants";

export function getUsers() {
  return api.get(USERS_URI).then((resp) => resp.data);
}

export function createUsers(user) {
  return api.post(USERS_URI, user).then((resp) => resp.data);
}

export function updateUsers(user) {
  return api.put(USERS_URI + "/" + user.id).then((resp) => resp.data);
}

export function deleteUsers(id) {
  return api.delete(USERS_URI + "/" + id).then((resp) => resp.data);
}
