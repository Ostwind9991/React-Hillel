import Paper from "@mui/material/Paper";

function AlbumsItem({ title }) {
  return (
    <Paper elevation={4}>
      <span>{title}</span>
    </Paper>
  );
}

export default AlbumsItem;
