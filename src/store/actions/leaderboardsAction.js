/* eslint-disable no-console */
/* eslint-disable indent */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable operator-linebreak */
/* eslint-disable no-unused-vars */
import ActionType from '../../constants/ActionTypes';

const receiveLeaderBoardsActionCreator = (leaderboards) => ({
  type: ActionType.LEADERBOARDS_RECEIVE,
  payload: { leaderboards },
});

export { receiveLeaderBoardsActionCreator };
