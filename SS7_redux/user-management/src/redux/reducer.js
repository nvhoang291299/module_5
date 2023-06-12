import { LIST_USER, DELETE_USER} from "../constant/constant";

const INITIAL_STATE = []

const userReducer = (users = INITIAL_STATE, action) => {
  const {type, payload} = action

  switch (type) {
    case LIST_USER:
      return payload
    default:
      return users;
  }
}

export default userReducer;