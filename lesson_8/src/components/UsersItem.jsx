import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

function UsersItem({ user, deleteUser, onSubmitButton }) {
  const { name, surname, phone, id } = user;
  return (
    <ListItem
      alignItems="flex-start"
      sx={{
        width: "100%",
        maxWidth: 360,
        display: "flex",
        backgroundColor: "#fffef2",
        borderRadius: "20px",
        alignItems: "stretch",
        flexDirection: "column",
        m: 1,
        boxShadow:
          "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;",
      }}
    >
      <ListItemText
        primary={`${name} ${surname}`}
        secondary={
          <>
            {" "}
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          padding: "20px 0 10px 0 ",
        }}
      >
        <Link to={'edituser/'+ id}>
          <Button
            variant="contained"
            color="success"
          >
            Редактировать
          </Button>
        </Link>
        <Button
          onClick={() => {
            deleteUser(id);
          }}
          variant="outlined"
          color="error"
        >
          Удалить
        </Button>
      </Box>
    </ListItem>
  );
}

export default UsersItem;
