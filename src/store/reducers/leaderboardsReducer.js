import ActionType from '../../constants/ActionType';

const leaderBoardsReducer = (leaderboards = [], action = {}) => {
  switch (action.type) {
    case ActionType.RECEIVE_LEADERBOARDS:
      return action.payload.leaderboards;
    default:
      return leaderboards;
  }
};

export default leaderBoardsReducer;
