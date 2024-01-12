/* eslint-disable no-console */
/* eslint-disable indent */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable operator-linebreak */
/* eslint-disable no-unused-vars */
import ActionType from '../../constants/ActionTypes';
import api from '../../services/api';

const addCommentThreadActionCreator = ({ threadId }) => ({
  type: ActionType.ADD_COMMENT,
  payload: { threadId },
});

const asyncAddCommentThread =
  ({ threadId, content }) =>
  async (dispatch) => {
    try {
      const comment = await api.createComment({ threadId, content });
      dispatch(addCommentThreadActionCreator(comment));
    } catch (error) {
      console.log(error.message);
    }
  };

export { addCommentThreadActionCreator, asyncAddCommentThread };
