import axios from "axios";
import { useQuery } from "react-query";
import User from "./User";

const Users = () => {
  const { data, isLoading } = useQuery("users", () =>
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.data)
  );

  return (
    <div>
      {isLoading && <h1>Loading...</h1>}
      <div className="row">
        {data?.map((user) => (
          <User key={user.id} id={user.id} name={user.name} email={user.email} />
        ))}
      </div>
    </div>
  );
};

export default Users;
