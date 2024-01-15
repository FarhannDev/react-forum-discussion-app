/* eslint-disable no-console */
/* eslint-disable indent */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable operator-linebreak */
/* eslint-disable no-unused-vars */
import ActionType from '../../constants/ActionTypes';
import api from '../../services/api';

const receiveDetailThreadActionCreator = (detailThread) => ({
  type: ActionType.RECEIVE_DETAIL_THREAD,
  payload: { detailThread },
});

const clearDetailThreadActionCreator = () => ({
  type: ActionType.CLEAR_DETAIL_THREAD,
});

const asyncReceiveDetailThread = (threadId) => async (dispatch) => {
  dispatch(clearDetailThreadActionCreator());
  try {
    const detailThread = await api.getThreadsDetail(threadId);
    dispatch(receiveDetailThreadActionCreator(detailThread));
  } catch (error) {
    console.log(error.message);
  }
};

export {
  receiveDetailThreadActionCreator,
  clearDetailThreadActionCreator,
  asyncReceiveDetailThread,
};
