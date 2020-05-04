import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import post from './post';
import chat from './chat';
import friends from './friends';
export default combineReducers({
  alert,
  auth,
  profile,
  post,
  friends,
  chat,
});
