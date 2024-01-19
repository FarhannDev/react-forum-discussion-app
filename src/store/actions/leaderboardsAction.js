import ActionType from '../../constants/ActionType';

const receiveLeaderBoardsActionCreator = (leaderboards) => ({
  type: ActionType.RECEIVE_LEADERBOARDS,
  payload: { leaderboards },
});

export { receiveLeaderBoardsActionCreator };
