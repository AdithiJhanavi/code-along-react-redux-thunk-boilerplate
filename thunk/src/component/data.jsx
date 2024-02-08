import { useDispatch, useSelector } from "react-redux";
import { GOUserData } from "./action";

export default function UserData(props) {
  const dispatch = useDispatch();

  const userData = useSelector((state) => state.users);
  console.log(userData);

  const godata = () => {
    props.setState(!props.value);
    dispatch(GOUserData());
  };

  return (
    <div>
      {userData && userData.length > 0 ? (
        userData.map((user, index) => (
          <div style={{ textAlign: "center" }} key={index}>
            <div>
              <h3>Name: {user.name}</h3>
              <h3>Email: {user.email}</h3>
              <hr />
            </div>
          </div>
        ))
      ) : (
        <p>No user data available</p>
      )}

      {props.value && (
        <button onClick={godata}>GO DATA</button>
      )}
    </div>
  );
}
