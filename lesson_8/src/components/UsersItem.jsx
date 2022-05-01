import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function UsersItem({ user }) {
  const { name, surname, phone } = user;
  return (
    <ListItem
      alignItems="flex-start"
      sx={{
        width: "100%",
        maxWidth: 360,
        display: "flex",
        backgroundColor: "#fffef2",
        m: 1,
        boxShadow:"rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;",
      }}
    >
      <ListItemText
        primary={`${name} ${surname}`}
        secondary={
          <>
            <Typography
              sx={{ display: "inline" }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              Phone
            </Typography>
            {phone}
          </>
        }
      />
      <Button variant="contained" color="success">Редактировать</Button>
      <Button variant="outlined" color="error">Удалить</Button>
    </ListItem>
  );
}

export default UsersItem;
