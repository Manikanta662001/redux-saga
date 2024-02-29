import { call, takeLatest, put } from "redux-saga/effects";
import {
  fetchUsersRequest,
  fetchUsersFailure,
  fetchUsersSuccess,
} from "../slices/apiSlice";

const getallUsers = async () => {
  const apiRes = await fetch("https://jsonplaceholder.typicode.com/users");
  const result = await apiRes.json();
  return result;
};

function* fetchUsers() {
  try {
    const users = yield call(getallUsers);
    yield put(fetchUsersSuccess(users));
  } catch (error) {
    yield put(fetchUsersFailure(error.message));
  }
}
function* rootSaga() {
  yield takeLatest(fetchUsersRequest, fetchUsers);
}
export default rootSaga;
