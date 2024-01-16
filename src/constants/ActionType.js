const ActionType = {
  // Auth user
  SET_AUTH_USER: 'authUser/set',
  SET_UNSET_AUTH_USER: 'authUser/unset',
  SET_IS_PRELOAD: 'isPreload/set',

  // users
  RECEIVE_USERS: 'users/receive',

  // Threads
  RECEIVE_THREADS: 'threads/receive',
  ADD_THREADS: 'threads/add',
  UP_VOTE_THREADS: 'threads/upVote',
  DOWN_VOTE_THREADS: 'threads/downVote',
  CLEAR_VOTE_THREADS: 'threads/clearVote',

  // DETAIL THREAD
  RECEIVE_THREAD_DETAIL: 'threadDetail/receive',
  CLEAR_THREAD_DETAIL: 'threadDetail/clear',
  UP_VOTE_THREAD_DETAIL: 'threadDetail/upVote',
  DOWN_VOTE_THREAD_DETAIL: 'threadDetail/downVote',
  CLEAR_VOTE_THREAD_DETAIL: 'threadDetail/clearVote',
  ADD_THREAD_COMMENT: 'threadDetail/addComment',
  UP_VOTE_COMMENT_THREAD: 'threadDetail/upVoteComment',
  DOWN_VOTE_COMMENT_THREAD: 'threadDetail/downVoteComment',
  CLEAR_VOTE_COMMENT_THREAD: 'threadDetail/clearVoteComment',

  // LEADERBOARDS
  RECEIVE_LEADERBOARDS: 'leaderBoards/receive',
};

export default ActionType;
