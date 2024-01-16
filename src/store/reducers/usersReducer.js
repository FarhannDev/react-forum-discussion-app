import ActionType from '../../constants/ActionTypes';

const usersReducer = (users = [], action = {}) => {
  switch (action.type) {
    case ActionType.USERS_RECEIVE:
      return action.payload.users;
    default:
      return users;
  }
};

export default usersReducer;
