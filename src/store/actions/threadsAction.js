/* eslint-disable comma-dangle */
/* eslint-disable no-console */
/* eslint-disable indent */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable operator-linebreak */
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
  type: ActionType.THREAD_NEUTRAL_VOTE,
  payload: { threadId, userId },
});

const asyncAddThread =
  ({ title, body, category = '' }) =>
  async (dispatch) => {
    try {
      const thread = await api.createThreads({ title, body, category });
      dispatch(addThreadActionCreator(thread));
    } catch (error) {
      console.log(error.message);
    }
  };

const asyncAddThreadsUpVote = (threadId) => async (dispatch, getState) => {
  const { authUser } = getState();
  dispatch(addThreadsUpVoteActionCreator({ threadId, userId: authUser.id }));

  try {
    await api.upVoteThreads(threadId);
  } catch (error) {
    console.log(error.message);
    dispatch(addThreadsUpVoteActionCreator({ threadId, userId: authUser.id }));
  }
};

const asyncAddThreadsDownVote = (threadId) => async (dispatch, getState) => {
  const { authUser } = getState();
  dispatch(addThreadsDownVoteActionCreator({ threadId, userId: authUser.id }));

  try {
    await api.downVoteThreads(threadId);
  } catch (error) {
    console.log(error.message);
    dispatch(
      addThreadsDownVoteActionCreator({ threadId, userId: authUser.id })
    );
  }
};

const asyncAddThreadsNeutralVote = (threadId) => async (dispatch, getState) => {
  const { authUser } = getState();
  dispatch(
    addThreadsNeutralVoteActionCreator({ threadId, userId: authUser.id })
  );

  try {
    await api.neutralizeVoteThreads(threadId);
  } catch (error) {
    console.log(error.message);
    dispatch(
      addThreadsNeutralVoteActionCreator({ threadId, userId: authUser.id })
    );
  }
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
