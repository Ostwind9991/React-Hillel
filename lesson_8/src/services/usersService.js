import {jsonApi} from "../api/api";
import { USERS_URI } from "../constants";

export function getUsers() {
  return jsonApi.get(USERS_URI).then((resp) => resp.data);
}
