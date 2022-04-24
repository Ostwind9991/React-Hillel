import api from "../api/api";
import { ALBUMS_URI } from "../constants";

export function getAlbums() {
  return api.get(ALBUMS_URI).then((resp) => resp.data);
}

export function createAlbums(album) {
  return api.post(ALBUMS_URI, album).then((resp) => resp.data);
}

export function updateAlbums(album) {
  return api.put(ALBUMS_URI + "/" + album.id).then((resp) => resp.data);
}

export function deleteAlbums(id) {
  return api.delete(ALBUMS_URI + "/" + id).then((resp) => resp.data);
}
