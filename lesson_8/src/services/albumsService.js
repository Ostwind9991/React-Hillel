import {jsonApi} from "../api/api";
import { ALBUMS_URI } from "../constants";

export function getAlbums() {
  return jsonApi.get(ALBUMS_URI).then((resp) => resp.data);
}
