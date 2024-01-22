import { toast } from 'react-toastify';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import ActionType from '../../constants/ActionType';
import api from '../../services/api';

const receiveUsersActionCreator = (users) => ({
  type: ActionType.RECEIVE_USERS,
  payload: { users },
});

const asyncRegisterUser = ({ name, email, password }) => async (dispatch) => {
  dispatch(showLoading());
  try {
    const result = await api.register({ name, email, password });

    console.log(result);
  } catch (error) {
    toast.error(error.message);
  }
  dispatch(hideLoading());
};

export { receiveUsersActionCreator, asyncRegisterUser };
