import axios from 'axios';
import { SetAlert } from './alert';
import {
  GET_ENCADREMENTS,
  DELETE_ENCADREMENT,
  ADD_ENCADREMENT,
  GET_ENCADREMENT,
  UPDATE_ENCADREMENT,
} from './Types';

// Get posts
export const getEncadrements = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/encadrement');

    dispatch({
      type: GET_ENCADREMENTS,
      payload: res.data,
    });
  } catch (err) {
    // dispatch({
    // //   payload: { msg: err.response.statusText, status: err.response.status },
    // });
  }
};

// Delete post
export const deleteEncadrement = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/encadrement/${id}`);

    dispatch({
      type: DELETE_ENCADREMENT,
      payload: id,
    });

    // dispatch(SetAlert('Post Removed', 'success'));
  } catch (err) {
    // dispatch({
    //   //   type: POST_ERROR,
    //   payload: { msg: err.response.statusText, status: err.response.status },
    // });
  }
};

// Add post
export const addEncadrement = ({ id, date }) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.post(`/api/encadrement/${id}`, date, config);

    dispatch({
      type: ADD_ENCADREMENT,
      payload: res.data,
    });

    // dispatch(SetAlert('Post Created', 'success'));
  } catch (err) {
    // dispatch({
    //   //   type: POST_ERROR,
    //   payload: { msg: err.response.statusText, status: err.response.status },
    // });
  }
};

// Get post
export const getEncadrement = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/encadrement/${id}`);

    dispatch({
      type: GET_ENCADREMENT,
      payload: res.data,
    });
  } catch (err) {
    // dispatch({
    //   //   type: POST_ERROR,
    //   payload: { msg: err.response.statusText, status: err.response.status },
    // });
  }
};
