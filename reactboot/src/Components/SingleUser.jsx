import axios from "axios";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";

const SingleUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const back = () => {
    navigate("/users");
  }
  const { data, isLoading, isError } = useQuery("user", () =>
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.data)
  );

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return (
      <>
        <h1>Error...</h1>
        <button className="btn btn-primary" onClick={() => back()}>Back</button>
      </>
    );
  }

  return (
    <div>
      <h2>SingleUserName: {data?.name}</h2>
      <h3>SingleUserEmail: {data?.email}</h3>
      <h4>SingleUserPhone: {data?.phone}</h4>
      <button className="btn btn-primary btn-sm" onClick={()=> back()}>Go Back</button>
    </div>
  );
};

export default SingleUser;
