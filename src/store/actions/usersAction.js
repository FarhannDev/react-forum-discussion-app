/* eslint-disable no-console */
/* eslint-disable indent */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable operator-linebreak */
/* eslint-disable no-unused-vars */
import ActionType from '../../constants/ActionTypes';
import api from '../../services/api';

const receiveUsersActionCreator = (users) => ({
  type: ActionType.USERS_RECEIVE,
  payload: { users },
});

const asyncRegisterUser =
  ({ name, email, password }) =>
  async () => {
    try {
      await api.register({ name, email, password });
    } catch (error) {
      console.log(error.message);
    }
  };

export { receiveUsersActionCreator, asyncRegisterUser };
