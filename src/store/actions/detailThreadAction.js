/* eslint-disable comma-dangle */
/* eslint-disable no-console */
/* eslint-disable indent */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable operator-linebreak */

import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../services/api';
import ActionType from '../../constants/ActionType';

export const receiveThreadDetailActionCreator = (detailThread) => ({
  type: ActionType.RECEIVE_THREAD_DETAIL,
  payload: { detailThread },
});

export const clearDetailThreadActionCreator = () => ({
  type: ActionType.CLEAR_THREAD_DETAIL,
});

export const toggleUpVoteThreadDetailActionCreator = (userId) => ({
  type: ActionType.UP_VOTE_THREAD_DETAIL,
  payload: { userId },
});

export const toggleDownVoteThreadDetailActionCreator = (userId) => ({
  type: ActionType.DOWN_VOTE_THREAD_DETAIL,
  payload: { userId },
});

export const clearVoteThreadDetailActionCreator = (userId) => ({
  type: ActionType.CLEAR_VOTE_THREAD_DETAIL,
  payload: { userId },
});

export const addCommentActionCreator = (comment) => ({
  type: ActionType.ADD_THREAD_COMMENT,
  payload: { comment },
});

export const toggleUpVoteThreadCommentActionCreator = (userId, commentId) => ({
  type: ActionType.UP_VOTE_COMMENT_THREAD,
  payload: { userId, commentId },
});

export const toggleDownVoteThreadCommentActionCreator = (
  userId,
  commentId
) => ({
  type: ActionType.DOWN_VOTE_COMMENT_THREAD,
  payload: { userId, commentId },
});

export const toggleClearVoteThreadCommentActionCreator = (
  userId,
  commentId
) => ({
  type: ActionType.CLEAR_VOTE_COMMENT_THREAD,
  payload: { userId, commentId },
});

export const asyncReceiveThreadsDetail = (threadId) => async (dispatch) => {
  dispatch(clearDetailThreadActionCreator());
  dispatch(showLoading());

  try {
    const threadDetail = await api.getDetailThreads(threadId);
    dispatch(receiveThreadDetailActionCreator(threadDetail));
  } catch (error) {
    console.log(error.message);
  }

  dispatch(hideLoading());
};

export const asyncToggleUpVoteThreadDetail =
  () => async (dispatch, getState) => {
    const { authUser, detailThread } = getState();
    dispatch(toggleUpVoteThreadDetailActionCreator(authUser.id));
    dispatch(showLoading());

    try {
      await api.upVoteThreads(detailThread.id);
    } catch (error) {
      console.log(error.message);
    }

    dispatch(hideLoading());
  };

export const asyncToggleDownVoteThreadDetail =
  () => async (dispatch, getState) => {
    const { authUser, detailThread } = getState();
    dispatch(toggleDownVoteThreadDetailActionCreator(authUser.id));
    dispatch(showLoading());

    try {
      await api.downVoteThreads(detailThread.id);
    } catch (error) {
      console.log(error.message);
    }

    dispatch(hideLoading());
  };

export const asyncToggleClearVoteThreadDetail =
  () => async (dispatch, getState) => {
    const { authUser, detailThread } = getState();
    dispatch(clearVoteThreadDetailActionCreator(authUser.id));
    dispatch(showLoading());

    try {
      await api.neutralizeVoteThreads(detailThread.id);
    } catch (error) {
      console.log(error.message);
    }

    dispatch(hideLoading());
  };

export const asyncAddComment = (id, content) => async (dispatch) => {
  dispatch(showLoading());
  try {
    const comment = await api.createComment(id, content);
    dispatch(addCommentActionCreator(comment));
  } catch (error) {
    console.log(error.message);
  }

  dispatch(hideLoading());
};

export const toggleUpVoteComment =
  (commentId) => async (dispatch, getState) => {
    const { authUser, detailThread } = getState();
    dispatch(toggleUpVoteThreadCommentActionCreator(authUser.id, commentId));
    dispatch(showLoading());
    try {
      await api.upVoteThreadsComment(detailThread.id, commentId);
    } catch (error) {
      console.log(error.message);
    }
    dispatch(hideLoading());
  };

export const toggleDownVoteComment =
  (commentId) => async (dispatch, getState) => {
    const { authUser, detailThread } = getState();
    dispatch(toggleDownVoteThreadCommentActionCreator(authUser.id, commentId));
    dispatch(showLoading());
    try {
      await api.downVoteThreadsComment(detailThread.id, commentId);
    } catch (error) {
      console.log(error.message);
    }

    dispatch(hideLoading());
  };

export const toggleClearVoteComment =
  (commentId) => async (dispatch, getState) => {
    const { authUser, detailThread } = getState();
    dispatch(toggleClearVoteThreadCommentActionCreator(authUser.id, commentId));
    dispatch(showLoading());
    try {
      await api.neutralizeVoteThreadsComment(detailThread.id, commentId);
    } catch (error) {
      console.log(error.message);
    }

    dispatch(hideLoading());
  };
