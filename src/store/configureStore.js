import { configureStore } from '@reduxjs/toolkit';
import authUserReducer from './reducers/authUserReducer';
import isPreloadReducer from './reducers/isPreloadReducer';
import usersReducer from './reducers/usersReducer';
import threadsReducer from './reducers/threadsReducer';
import detailThreadReducer from './reducers/detailThreadReducer';
import leaderBoardsReducer from './reducers/leaderboardsReducer';

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    isPreload: isPreloadReducer,
    users: usersReducer,
    threads: threadsReducer,
    detailThread: detailThreadReducer,
    leaderBoards: leaderBoardsReducer,
  },
});

export default store;
