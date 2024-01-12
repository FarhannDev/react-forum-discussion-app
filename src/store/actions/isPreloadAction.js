/* eslint-disable no-console */
/* eslint-disable indent */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable operator-linebreak */
/* eslint-disable no-unused-vars */
import ActionType from '../../constants/ActionTypes';
import api from '../../services/api';
import { setAuthUserActionCreator } from './authUserAction';

const setIsPreloadActionCreator = (isPreload) => ({
  type: ActionType.SET_IS_PRELOAD,
  payload: { isPreload },
});

const asyncPreloadProcess = () => async (dispatch) => {
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
};

export { setIsPreloadActionCreator, asyncPreloadProcess };
