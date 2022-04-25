import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import AlbumsItem from "../../components/AlbumsItem";
import useAlbums from "../../hooks/useAlbums";

function Albums() {
  const { run, albums } = useAlbums();
  useEffect(() => run(), []);

  return (
    <>
      <Breadcrumbs>
        <Link className="Breadcrumbslink" to={"/"}>
          Home{" "}
        </Link>
        <Link className="Breadcrumbslink_target" to={"/albums"}>
          Albums
        </Link>
      </Breadcrumbs>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          "& > :not(style)": {
            m: 2,
            width: 128,
            height: 128,
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            p: 1,
            "& > :not(style)": {
              color: "#644f4f",
              fontWeight: "600",
            },
          },
        }}
      >
        {albums.map((album) => (
          <AlbumsItem key={album.id} title={album.title} />
        ))}
      </Box>{" "}
    </>
  );
}

export default Albums;
