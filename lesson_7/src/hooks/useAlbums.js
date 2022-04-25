import { useState } from "react";
import { getAlbums } from "../services/albumsService";

export default function useAlbums() {
  const [albums, setAlbums] = useState([]);

  const run = () =>
    getAlbums().then((data) => {
      setAlbums(data);
    });

  return {
    albums,
    run,
  };
}
