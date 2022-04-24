import { useState } from "react";
import {
  getUsers
} from "../services/usersService";

export default function useUsers() {
  const [users, setUsers] = useState([]);

  const run = ()=> getUsers().then((data) => {
    setUsers(data);
    });

  return {
    users,
    run,
  };
}
