const URL = "https://612687da3ab4100017a68fd8.mockapi.io/contacts/";

export function createContact(contact) {
  return fetch(URL, {
    method: "POST",
    body: JSON.stringify(contact),
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
}

export function updateContact(contact) {
  return fetch(URL + "/" + contact.id, {
    method: "PUT",
    body: JSON.stringify(contact),
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
}

export function updateContactTable() {
  return fetch(URL).then((resp) => resp.json());
}

export function deleteContact(id) {
  return fetch(URL + id, {
    method: "DELETE",
  }).then((res) => res.json());
}
