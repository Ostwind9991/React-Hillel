import { mockApi } from "../api/api";
import { CONTACTS_URI } from "../constants";

export function getUsers() {
  return mockApi.get(CONTACTS_URI).then((resp) => resp.data);
}

export function getUser(id) {
  return mockApi.get(CONTACTS_URI + "/" + id).then((resp) => resp.data);
}

export function addUsers(user) {
  return mockApi.post(CONTACTS_URI, user).then((resp) => resp.data);
}

export function updateUsers(user) {
  return mockApi
    .put(CONTACTS_URI + "/" + user.id, user)
    .then((resp) => resp.data);
}

export function deleteUsers(id) {
  return mockApi.delete(CONTACTS_URI + "/" + id).then((resp) => resp.data);
}
