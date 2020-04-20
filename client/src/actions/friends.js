import axios from 'axios';
import { SetAlert } from './alert';
import { SEND_REQUEST, FRIEND_REQUEST } from './Types';
export const SSendRequest = (id) => async (dispatch) => {
  try {
    const res = await axios.post(`/api/friends/sendfriendrequest/${id}`);
    dispatch({
      type: SEND_REQUEST,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
export const FriendRequest = (id) => async (dispatch) => {
  try {
    const res = await axios.post(`/api/friends/friendrequest/${id}`);
    dispatch({
      type: FRIEND_REQUEST,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
