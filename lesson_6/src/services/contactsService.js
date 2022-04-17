import api from "../api/api";

export function createContact(contact) {
  return api.post("", contact).then((res) => res.data);
}

export function updateContact(contact) {
  return api.put("" + "/" + contact.id).then((resp) => resp.data);
}

export function updateContactTable() {
  return api.get().then((resp) => resp.data);
}

export function deleteContact(id) {
  return api.delete("" + id).then((resp) => resp.data);
}
