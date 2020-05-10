import axios from 'axios';
// import { SetAlert } from './alert';
import { GET_ROOM, GET_MESSAGES, DELETE_MESSAGES } from './Types';

export const Getroom = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/chat/getroom/${id}`);
    dispatch({
      type: GET_ROOM,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const GetMessages = (friendid) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/chat/getmessages/${friendid}`);
    dispatch({
      type: GET_MESSAGES,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
export const clearMessage = () => (dispatch) => {
  dispatch({
    type: DELETE_MESSAGES,
  });
};
