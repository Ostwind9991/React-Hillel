import Button from '@mui/material/Button';
import { useContext } from "react";
import userContext from "../../context/userContext";



export default function ButtonAddContact(props) {
  const { onShowNextPage } = props;
  const value = useContext(userContext);

  return (
    <Button variant="contained" color={value === false ? "primary" : "secondary"}  onClick={onShowNextPage}>Добавить котакт</Button>
  );
}
