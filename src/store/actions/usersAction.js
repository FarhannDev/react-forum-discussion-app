/* eslint-disable no-console */
/* eslint-disable indent */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable operator-linebreak */
/* eslint-disable no-unused-vars */
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import ActionType from '../../constants/ActionType';
import api from '../../services/api';

const receiveUsersActionCreator = (users) => ({
  type: ActionType.RECEIVE_USERS,
  payload: { users },
});

const asyncRegisterUser =
  ({ name, email, password }) =>
  async (dispatch) => {
    try {
      dispatch(showLoading());
      await api.register({ name, email, password });
    } catch (error) {
      dispatch(showLoading());
      console.log(error.message);
    }
    dispatch(hideLoading());
  };

export { receiveUsersActionCreator, asyncRegisterUser };
