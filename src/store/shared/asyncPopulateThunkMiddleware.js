import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../services/api';
import { receiveUsersActionCreator } from '../actions/usersAction';
import { threadsReceiveActionCreator } from '../actions/threadsAction';
import { receiveLeaderBoardsActionCreator } from '../actions/leaderboardsAction';

const asyncPopulateThunkMiddleware = () => async (dispatch) => {
  dispatch(showLoading());
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

  dispatch(hideLoading());
};

export default asyncPopulateThunkMiddleware;
