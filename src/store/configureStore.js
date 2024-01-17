/* eslint-disable comma-dangle */
import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
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
    loadingBar: loadingBarReducer,
  },
});

export default store;
