import ActionType from '../../constants/ActionTypes';

const leaderBoardsReducer = (leaderboards = [], action = {}) => {
  switch (action.type) {
    case ActionType.LEADERBOARDS_RECEIVE:
      return action.payload.leaderboards;
    default:
      return leaderboards;
  }
};

export default leaderBoardsReducer;
