import axios from 'axios';
// import { SetAlert } from './alert';
import {
  SEND_REQUEST,
  FRIEND_REQUEST,
  GET_SENDREQUEST,
  GET_REQUESTFRIEND,
  DELETE_REQUESTFRIEND,
  DELETE_SENDREQUEST,
  REJECT_REQUESTFRIEND,
  REJECT_SENDREQUESTFRIEND,
  ACCEPT_FRIEND,
  GET_FRIENDS,
  DELETE_FRIENDS,
  GETNOTIFICATIONREQ,
  GETONLINE,
  NEWCONNECT,
} from './Types';
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
export const GetSendreq = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/friends/getreq/${id}`);
    dispatch({
      type: GET_SENDREQUEST,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
export const getreqfriend = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/friends/getreqfriend/${id}`);
    dispatch({
      type: GET_REQUESTFRIEND,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const Deletesendreq = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/api/friends/deletesendreq/${id}`);
    dispatch({
      type: DELETE_SENDREQUEST,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const Deleterequest = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/api/friends/deletereq/${id}`);
    dispatch({
      type: DELETE_REQUESTFRIEND,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
export const RejectRequest = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/api/friends/rejectreq/${id}`);
    dispatch({
      type: REJECT_REQUESTFRIEND,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
export const RejectSendRequest = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/api/friends/rejectsendreq/${id}`);
    dispatch({
      type: REJECT_SENDREQUESTFRIEND,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const Accept_Friends = (id) => async (dispatch) => {
  try {
    const res = await axios.post(`/api/friends/acceptfriend/${id}`);
    dispatch({
      type: ACCEPT_FRIEND,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const GetFriends = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/friends/getfriends');
    dispatch({
      type: GET_FRIENDS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const DeleteFriends = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/api/friends/deletefriend/${id}`);
    dispatch({
      type: DELETE_FRIENDS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const Getreqfriendnotif = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/friends/getreqfriend/${id}`);
    dispatch({
      type: GETNOTIFICATIONREQ,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
export const GetOnline = () => async (dispatch) => {
  try {
    const res = await axios.get(`/api/friends/onlinefriend`);
    dispatch({
      type: GETONLINE,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const newConnect = (payload) => (dispatch) => {
  dispatch({
    type: NEWCONNECT,
    payload,
  });
};
