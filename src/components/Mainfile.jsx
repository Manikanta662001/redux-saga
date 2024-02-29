import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsersRequest } from "../store/slices/apiSlice";

function Mainfile() {
  const dispatch = useDispatch();
  const state = useSelector((state) => console.log(state, "ST"));
  const users = useSelector((state) => state.apiReducer.users);
  return (
    <div>
      <button onClick={() => dispatch(fetchUsersRequest())}>Api</button>
      <ul>
        {users?.map((user) => {
          return <li>{user.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default Mainfile;
