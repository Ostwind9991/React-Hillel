import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

function UsersItem({ user }) {
  const { name, username } = user;
  const { street, suite, city, zipcode } = user.address;
  return (
    <ListItem
      alignItems="flex-start"
      sx={{
        width: "100%",
        maxWidth: 360,
        display: "flex",
        backgroundColor: "#fffef2",
        m: 1,
      }}
    >
      <ListItemText
        primary={`${name} ${username}`}
        secondary={
          <>
            <Typography
              sx={{ display: "inline" }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              Address
            </Typography>
            {` ${street} ${suite} ${city} ${zipcode}`}
          </>
        }
      />
    </ListItem>
  );
}

export default UsersItem;
