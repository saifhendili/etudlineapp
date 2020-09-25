import axios from 'axios';
import { SetAlert } from './alert';
import {
  USER_LOADEDADMIN,
  AUTH_ERRORADMIN,
  LOGIN_SUCCESSADMIN,
  LOGIN_FAILADMIN,
  LOGOUTADMIN,
  GETALLUSERS,
  GETALLPOSTS,
  DELETEPOSTS,
  DELETEUSER,
} from './Types';
import setAuthToken from '../utils/setAuthToken';

export const loadUserAdmin = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get('/api/authadmin/');
    dispatch({
      type: USER_LOADEDADMIN,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERRORADMIN,
    });
  }
};

export const login = (email, passwordAdmin) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ email, passwordAdmin });

  try {
    const res = await axios.post('/api/authadmin/login/', body, config);

    dispatch({
      type: LOGIN_SUCCESSADMIN,
      payload: res.data,
    });
    dispatch(loadUserAdmin());
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(SetAlert(error.msg, 'danger')));
    }

    dispatch({
      type: LOGIN_FAILADMIN,
    });
  }
};

// Logout / Clear Profile
export const logoutadmin = () => (dispatch) => {
  // dispatch({ type: CLEAR_PROFILE });
  dispatch({ type: LOGOUTADMIN });
};

export const getallusers = () => async (dispatch) => {
  try {
    const res = await axios.get(`/api/authadmin/getallusers`);
    dispatch({
      type: GETALLUSERS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
export const getallposts = () => async (dispatch) => {
  try {
    const res = await axios.get(`/api/authadmin/getallposts`);
    dispatch({
      type: GETALLPOSTS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
export const deleteusers = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/api/authadmin/deleteuser/${id}`);
    dispatch({
      type: DELETEUSER,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
export const deleteposts = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/api/authadmin/deletepost/${id}`);
    dispatch({
      type: DELETEPOSTS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
