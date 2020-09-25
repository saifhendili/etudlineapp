import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import post from './post';
import chat from './chat';
import friends from './friends';
import admin from './admin';
import encadrement from './encadrement';
import cours from './cours';

export default combineReducers({
  alert,
  auth,
  profile,
  post,
  friends,
  chat,
  admin,
  encadrement,
  cours,
});
