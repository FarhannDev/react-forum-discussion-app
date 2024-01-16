/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import api from '../../services/api';
import { receiveUsersActionCreator } from '../actions/usersAction';
import { threadsReceiveActionCreator } from '../actions/threadsAction';
import { receiveLeaderBoardsActionCreator } from '../actions/leaderboardsAction';

const asyncPopulateThunkMiddleware = () => async (dispatch) => {
  try {
    const users = await api.getAllUsers();
    const threads = await api.getAllThreads();
    const leaderBoards = await api.getLeaderboards();

    dispatch(receiveUsersActionCreator(users));
    dispatch(threadsReceiveActionCreator(threads));
    dispatch(receiveLeaderBoardsActionCreator(leaderBoards));
  } catch (error) {
    console.log(error.message);
  }
};

export default asyncPopulateThunkMiddleware;
