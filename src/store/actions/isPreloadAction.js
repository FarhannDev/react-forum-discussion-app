import { hideLoading, showLoading } from 'react-redux-loading-bar';
import ActionType from '../../constants/ActionType';
import api from '../../services/api';
import { setAuthUserActionCreator } from './authUserAction';

const setIsPreloadActionCreator = (isPreload) => ({
  type: ActionType.SET_IS_PRELOAD,
  payload: { isPreload },
});

const asyncPreloadProcess = () => async (dispatch) => {
  dispatch(showLoading());

  try {
    // preload process
    const authUser = await api.getOwnProfile();
    dispatch(setAuthUserActionCreator(authUser));
  } catch (error) {
    // fallback process
    dispatch(setAuthUserActionCreator(null));
  } finally {
    // end preload process
    dispatch(setIsPreloadActionCreator(false));
  }

  dispatch(hideLoading());
};

export { setIsPreloadActionCreator, asyncPreloadProcess };
