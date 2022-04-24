import "./styles.css";
import {Link } from "react-router-dom";
import useAlbums from "../../hooks/useAlbums"
import AlbumsItem from "../../components/AlbumsItem/AlbumsItem"
import { useEffect } from "react";

function Albums() {
const {run, albums} =useAlbums()
useEffect(()=>run(),[])

  return (    <>    <div>
    <Link to={"/"}>Dashboard</Link>
  </div>
  {albums.map((album) => (
            <AlbumsItem
              key={album.id}
              title={album.title}
            />
          ))}  </>
  )
  

    
  
}

export default Albums;
