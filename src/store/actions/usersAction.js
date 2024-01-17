/* eslint-disable no-console */
/* eslint-disable indent */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable operator-linebreak */
/* eslint-disable no-unused-vars */
import { toast } from 'react-toastify';
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
    dispatch(showLoading());
    try {
      await api.register({ name, email, password });
    } catch (error) {
      // alert(error.message);
      toast.error(error.message);
    }
    dispatch(hideLoading());
  };

export { receiveUsersActionCreator, asyncRegisterUser };
