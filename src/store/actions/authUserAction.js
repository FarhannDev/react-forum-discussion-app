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

      if (authUser) {
        dispatch(setAuthUserActionCreator(authUser));
        alert('Anda berhasil login');
        window.location.href = '/onboarding';
      }
    } catch (error) {
      toast.error(error.message);
    }
    dispatch(hideLoading());
  };

const asyncUnsetAuthUser = () => (dispatch) => {
  dispatch(unsetAuthUserActionCreator());

  api.putAccessToken('');

  window.location.href = '/login';
};

export {
  setAuthUserActionCreator,
  unsetAuthUserActionCreator,
  asyncSetAuthUser,
  asyncUnsetAuthUser,
};
