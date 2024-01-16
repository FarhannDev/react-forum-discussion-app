/* eslint-disable indent */
/* eslint-disable comma-dangle */
/* eslint-disable no-empty */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
// import ActionType from '../../constants/ActionTypes';

import ActionType from '../../constants/ActionType';

const detailThreadReducer = (detailThread = null, action = {}) => {
  switch (action.type) {
    case ActionType.RECEIVE_THREAD_DETAIL:
      return action.payload.detailThread;
    case ActionType.CLEAR_THREAD_DETAIL:
      return null;
    case ActionType.ADD_THREAD_COMMENT:
      return {
        ...detailThread,
        comments: [action.payload.comment, ...detailThread.comments],
      };
    case ActionType.UP_VOTE_THREAD_DETAIL:
      return {
        ...detailThread,
        upVotesBy: detailThread.upVotesBy.includes(action.payload.userId)
          ? detailThread.upVotesBy.filter((id) => id !== action.payload.userId)
          : detailThread.upVotesBy.concat([action.payload.userId]),
        downVotesBy: detailThread.downVotesBy.includes(action.payload.userId)
          ? detailThread.downVotesBy.filter(
              (id) => id !== action.payload.userId
            )
          : detailThread.downVotesBy,
      };
    case ActionType.DOWN_VOTE_THREAD_DETAIL:
      return {
        ...detailThread,
        downVotesBy: detailThread.downVotesBy.includes(action.payload.userId)
          ? detailThread.downVotesBy.filter(
              (id) => id !== action.payload.userId
            )
          : detailThread.downVotesBy.concat([action.payload.userId]),
        upVotesBy: detailThread.upVotesBy.includes(action.payload.userId)
          ? detailThread.upVotesBy.filter((id) => id !== action.payload.userId)
          : detailThread.upVotesBy,
      };
    case ActionType.CLEAR_VOTE_THREAD_DETAIL:
      return {
        ...detailThread,
        downVotesBy: detailThread.downVotesBy.includes(action.payload.userId)
          ? detailThread.downVotesBy.filter(
              (id) => id !== action.payload.userId
            )
          : detailThread.downVotesBy,
        upVotesBy: detailThread.upVotesBy.includes(action.payload.userId)
          ? detailThread.upVotesBy.filter((id) => id !== action.payload.userId)
          : detailThread.upVotesBy,
      };

    case ActionType.UP_VOTE_COMMENT_THREAD:
      return {
        ...detailThread,
        comments: detailThread.comments.map((comment) => {
          if (comment.id === action.payload.commentId) {
            return {
              ...comment,
              upVotesBy: comment.upVotesBy.includes(action.payload.userId)
                ? comment.upVotesBy.filter((id) => id !== action.payload.userId)
                : comment.upVotesBy.concat([action.payload.userId]),
              downVotesBy: comment.downVotesBy.includes(action.payload.userId)
                ? comment.downVotesBy.filter(
                    (id) => id !== action.payload.userId
                  )
                : comment.downVotesBy,
            };
          }
          return comment;
        }),
      };

    case ActionType.DOWN_VOTE_COMMENT_THREAD:
      return {
        ...detailThread,
        comments: detailThread.comments.map((comment) => {
          if (comment.id === action.payload.commentId) {
            return {
              ...comment,
              downVotesBy: comment.downVotesBy.includes(action.payload.userId)
                ? comment.downVotesBy.filter(
                    (id) => id !== action.payload.userId
                  )
                : comment.downVotesBy.concat([action.payload.userId]),
              upVotesBy: comment.upVotesBy.includes(action.payload.userId)
                ? comment.upVotesBy.filter((id) => id !== action.payload.userId)
                : comment.upVotesBy,
            };
          }
          return comment;
        }),
      };

    case ActionType.CLEAR_VOTE_COMMENT_THREAD:
      return {
        ...detailThread,
        comments: detailThread.comments.map((comment) => {
          if (comment.id === action.payload.commentId) {
            return {
              ...comment,
              downVotesBy: comment.downVotesBy.includes(action.payload.userId)
                ? comment.downVotesBy.filter(
                    (id) => id !== action.payload.userId
                  )
                : comment.downVotesBy,
              upVotesBy: comment.upVotesBy.includes(action.payload.userId)
                ? comment.upVotesBy.filter((id) => id !== action.payload.userId)
                : comment.upVotesBy,
            };
          }
          return comment;
        }),
      };
    default:
      return detailThread;
  }
};

export default detailThreadReducer;
