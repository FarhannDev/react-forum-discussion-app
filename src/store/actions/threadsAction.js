import { hideLoading, showLoading } from 'react-redux-loading-bar';
import ActionType from '../../constants/ActionType';
import api from '../../services/api';

const threadsReceiveActionCreator = (threads) => ({
  type: ActionType.RECEIVE_THREADS,
  payload: { threads },
});

const addThreadActionCreator = (thread) => ({
  type: ActionType.ADD_THREADS,
  payload: { thread },
});

const addThreadsUpVoteActionCreator = ({ threadId, userId }) => ({
  type: ActionType.UP_VOTE_THREADS,
  payload: { threadId, userId },
});

const addThreadsDownVoteActionCreator = ({ threadId, userId }) => ({
  type: ActionType.DOWN_VOTE_THREADS,
  payload: { threadId, userId },
});

const addThreadsNeutralVoteActionCreator = ({ threadId, userId }) => ({
  type: ActionType.CLEAR_VOTE_THREADS,
  payload: { threadId, userId },
});

const asyncAddThread = ({ title, body, category = '' }) => async (dispatch) => {
  dispatch(showLoading());
  try {
    const thread = await api.createThreads({ title, body, category });
    dispatch(addThreadActionCreator(thread));
  } catch (error) {
    console.log(error.message);
  }

  dispatch(hideLoading());
};

const asyncAddThreadsUpVote = (threadId) => async (dispatch, getState) => {
  const { authUser } = getState();
  dispatch(addThreadsUpVoteActionCreator({ threadId, userId: authUser?.id }));
  dispatch(showLoading());

  try {
    await api.upVoteThreads(threadId);
  } catch (error) {
    console.log(error.message);
    dispatch(addThreadsUpVoteActionCreator({ threadId, userId: authUser?.id }));
  }

  dispatch(hideLoading());
};

const asyncAddThreadsDownVote = (threadId) => async (dispatch, getState) => {
  const { authUser } = getState();
  dispatch(addThreadsDownVoteActionCreator({ threadId, userId: authUser?.id }));
  dispatch(showLoading());

  try {
    await api.downVoteThreads(threadId);
  } catch (error) {
    console.log(error.message);
    dispatch(
      addThreadsDownVoteActionCreator({ threadId, userId: authUser?.id }),
    );
  }

  dispatch(hideLoading());
};

const asyncAddThreadsNeutralVote = (threadId) => async (dispatch, getState) => {
  const { authUser } = getState();
  dispatch(
    addThreadsNeutralVoteActionCreator({ threadId, userId: authUser?.id }),
  );

  dispatch(showLoading());
  try {
    await api.neutralizeVoteThreads(threadId);
  } catch (error) {
    console.log(error.message);
    dispatch(
      addThreadsNeutralVoteActionCreator({ threadId, userId: authUser?.id }),
    );
  }

  dispatch(hideLoading());
};

export {
  threadsReceiveActionCreator,
  addThreadActionCreator,
  addThreadsUpVoteActionCreator,
  addThreadsDownVoteActionCreator,
  addThreadsNeutralVoteActionCreator,
  asyncAddThread,
  asyncAddThreadsUpVote,
  asyncAddThreadsDownVote,
  asyncAddThreadsNeutralVote,
};
