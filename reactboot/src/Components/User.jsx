import { useNavigate } from "react-router-dom";

const User = ({ name, email, id }) => {

    const navigate = useNavigate();
    const seeDetails = () => {
        navigate(`/users/${id}`)
    }
  return (
    <div className="col-md-4 p-2 ">
      <div className="border rounded shadow p-2">
        <h2>{name}</h2>
        <p>{email}</p>
        <button className="btn btn-primary btn-sm" onClick={()=> seeDetails()}>See Details</button>
      </div>
    </div>
  );
};

export default User;
