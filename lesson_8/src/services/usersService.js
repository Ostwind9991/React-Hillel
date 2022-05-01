import {mockApi} from "../api/api";
import { CONTACTS_URI } from "../constants";

export function getUsers() {
  return mockApi.get(CONTACTS_URI).then((resp) => resp.data);
}
