import axios from 'axios';
import { SetAlert } from './alert';
import {
  GET_COURS,
  COURS_ERROR,
  UPDATE_LIKESCOURS,
  DELETE_COUR,
  ADD_COUR,
  GET_COUR,
  ADD_COMMENT_COURS,
  REMOVE_COMMENT_COURS,
} from './Types';

// Get posts
export const getCours = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/cours');

    dispatch({
      type: GET_COURS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: COURS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Add like
export const addLike = (id) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/cours/like/${id}`);

    dispatch({
      type: UPDATE_LIKESCOURS,
      payload: { id, likes: res.data },
    });
  } catch (err) {
    dispatch({
      type: COURS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Remove like
export const removeLike = (id) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/cours/unlike/${id}`);

    dispatch({
      type: UPDATE_LIKESCOURS,
      payload: { id, likes: res.data },
    });
  } catch (err) {
    dispatch({
      type: COURS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Delete post
export const deleteCours = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/cours/${id}`);

    dispatch({
      type: DELETE_COUR,
      payload: id,
    });

    dispatch(SetAlert('Cours Removed', 'success'));
  } catch (err) {
    dispatch({
      type: COURS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Add post
export const addCour = (formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.post('/api/cours', formData, config);

    dispatch({
      type: ADD_COUR,
      payload: res.data,
    });

    dispatch(SetAlert('Cours Created', 'success'));
  } catch (err) {
    dispatch({
      type: COURS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Get post
export const getCour = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/cours/${id}`);

    dispatch({
      type: GET_COUR,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: COURS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Add comment
export const addComment = (courId, formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.post(
      `/api/cours/comment/${courId}`,
      formData,
      config
    );

    dispatch({
      type: ADD_COMMENT_COURS,
      payload: res.data,
    });

    dispatch(SetAlert('Comment Added', 'success'));
  } catch (err) {
    dispatch({
      type: COURS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Delete comment
export const deleteComment = (postId, commentId) => async (dispatch) => {
  try {
    await axios.delete(`/api/cours/comment/${postId}/${commentId}`);

    dispatch({
      type: REMOVE_COMMENT_COURS,
      payload: commentId,
    });

    dispatch(SetAlert('Comment Removed', 'success'));
  } catch (err) {
    dispatch({
      type: COURS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
