// import { LIST_USER, DELETE_USER} from "../constant/constant";

// const INITIAL_STATE = []

// const userReducer = (users = INITIAL_STATE, action) => {
//   const {type, payload} = action

//   switch (type) {
//     case LIST_USER:
//       return payload
//     default:
//       return users;
//   }
// }

// export default userReducer;
import { FETCH_USER_SUCCESS } from "./action";

// khởi tạo giá trị mặc định cho state gốc.

const initialState = {
  users: []
};

// Khởi tạo reducer
const rootReducer = (state = initialState, action) => {
  // Handle các actions gửi lên
  switch (action.type) {
    case FETCH_USER_SUCCESS:
      return { ...state, users: action.payload };
    default:
      return state;
  }
};
export default rootReducer;