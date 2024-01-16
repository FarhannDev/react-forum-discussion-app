const ActionType = {
  // AUTH USER
  SET_AUTH_USER: 'authUser/set',
  UNSET_AUTH_USER: 'authUser/unset',
  SET_IS_PRELOAD: 'isPreload/set',

  // USERS
  USERS_RECEIVE: 'users/receive',

  // THREADS
  THREADS_RECEIVE: 'threads/receive',
  THREADS_ADD: 'threads/add',
  THREADS_UP_VOTE: 'threads/upVote',
  THREAD_DOWN_VOTE: 'threads/downVote',
  THREAD_NEUTRAL_VOTE: 'threads/neutralVote',

  // DETAIL THREAD
  DETAIL_THREAD_RECEIVE: 'detailThread/receive',
  DETAIL_THREAD_CLEAR: 'detailThread/clear',
  DETAIL_THREAD_ADD_NEW_COMMENT: 'detailThread/addNewComment',
  DETAIL_THREAD_UP_VOTE_COMMENT: 'detailThread/upVoteComment',
  DETAIL_THREAD_DOWN_VOTE_COMMENT: 'detailThread/downVoteComment',
  DETAIL_THREAD_NEUTRAL_Vote_COMMENT: 'detailThread/neutralVoteComment',

  UP_VOTE_THREAD_DETAIL: 'detailThread/upVoteThreads',
  DOWN_VOTE_THREAD_DETAIL: 'detailThread/downVoteThreads',
  CLEAR_VOTE_THREAD_DETAIL: 'detailThread/clearVoteThreads',
  // LEADBOARDS
  LEADERBOARDS_RECEIVE: 'leaderboards/receive',

  // CATEGORIES
  CATEGORIES_RECEIVE: 'categories/receive',
};

export default ActionType;
