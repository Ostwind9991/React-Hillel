import "./styles.css";
import {Link } from "react-router-dom";
import useUsers from "../../hooks/useUsers"
import UsersItem from "../../components/UsersItem/UsersItem"
import { useEffect } from "react";

function Users() {
const {run, users} =useUsers()
useEffect(()=>run(),[])

  return (    <>    <div>
    <Link to={"/"}>Dashboard</Link>
  </div>
  {users.map((user) => (
            <UsersItem
              key={user.id}
              user={user}
            />
          ))}  </>
  )
  

    
  
}

export default Users;
