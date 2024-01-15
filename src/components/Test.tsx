import { useState } from "react";
import fetchUsers from "../api/fetchUsers";

interface User {
  id: number;
  name: string;
}

export default function Test() {
  const [data, setData] = useState([]);

  const handleClick = () => {
    const fetchData = async () => {
      const users = await fetchUsers();
      setData(users);
    };

    fetchData();
  };

  const handleClear = () => {
    setData([]);
  };

  return (
    <div>
      {data.length > 0 ? (
        <button onClick={handleClear}>Clear</button>
      ) : (
        <button onClick={handleClick}>Click Me!</button>
      )}
      {data
        ? data.map((user: User) => <div key={user.id}>{user.name}</div>)
        : null}
    </div>
  );
}
