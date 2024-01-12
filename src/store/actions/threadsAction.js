/* eslint-disable no-console */
/* eslint-disable indent */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable operator-linebreak */
/* eslint-disable no-unused-vars */
import ActionType from '../../constants/ActionTypes';
import api from '../../services/api';

const addThreadActionCreator = (thread) => ({
  type: ActionType.ADD_THREAD,
  payload: { thread },
});

const receiveThreadsActionCreator = (threads) => ({
  type: ActionType.RECEIVE_THREADS,
  payload: { threads },
});

const asyncAddThread =
  ({ title, body, category }) =>
  async (dispatch) => {
    try {
      const thread = await api.createThread({ title, body, category });
      dispatch(addThreadActionCreator(thread));
    } catch (error) {
      console.log(error.message);
    }
  };

export { receiveThreadsActionCreator, addThreadActionCreator, asyncAddThread };
