import { LIST_USER, DELETE_USER } from '../constant/constant';
import userService from '../services/UserService';


export const getListUser = () => async (dispatch) => {
    try {
        const res = await userService.findAll()

        dispatch({
            type: LIST_USER,
            payload: res.data
        })
    } catch (error) {
        console.error(error);
    }
}
