import ActionType from '../../constants/ActionTypes';

const commentThreadReducer = (comment = null, action = {}) => {
  switch (action.type) {
    case ActionType.ADD_COMMENT:
      return [...action.payload.comment, ...comment];
    default:
      return comment;
  }
};

export default commentThreadReducer;
