/* eslint-disable no-console */
/* eslint-disable indent */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable operator-linebreak */
/* eslint-disable no-unused-vars */
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { toast } from 'react-toastify';
import ActionType from '../../constants/ActionType';
import api from '../../services/api';

const setAuthUserActionCreator = (authUser) => ({
  type: ActionType.SET_AUTH_USER,
  payload: { authUser },
});

const unsetAuthUserActionCreator = () => ({
  type: ActionType.SET_UNSET_AUTH_USER,
});

const asyncSetAuthUser =
  ({ email, password }) =>
  async (dispatch) => {
    dispatch(showLoading());

    try {
      const token = await api.login({ email, password });
      api.putAccessToken(token);

      const authUser = await api.getOwnProfile();
      dispatch(setAuthUserActionCreator(authUser));
    } catch (error) {
      toast.error(error.message);
    }
    dispatch(hideLoading());
  };

const asyncUnsetAuthUser = () => (dispatch) => {
  dispatch(unsetAuthUserActionCreator());

  api.putAccessToken('');
};

export {
  setAuthUserActionCreator,
  unsetAuthUserActionCreator,
  asyncSetAuthUser,
  asyncUnsetAuthUser,
};
