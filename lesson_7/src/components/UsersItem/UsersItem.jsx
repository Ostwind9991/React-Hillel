import "./styles.css";

function UsersItem({ user }) {
  const {name, username, email, phone} = user
  return (
    <li>
      <div>{name}</div>
      <div>{username}</div>
      <div>{email}</div>
      <div>{phone}</div>

    </li>
  );
}

export default UsersItem;
