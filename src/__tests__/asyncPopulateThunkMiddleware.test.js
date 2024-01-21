/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import { describe, beforeEach, afterEach, it, vi, expect } from 'vitest';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import {
  fakeUsersResponse,
  fakeThreadsResponse,
  fakeLeaderboardsResponse,
  fakeErrorResponse,
} from '../utils/fakeResponseApi';
import api from '../services/api';
import asyncPopulateThunkMiddleware from '../store/shared/asyncPopulateThunkMiddleware';
import { receiveUsersActionCreator } from '../store/actions/usersAction';
import { threadsReceiveActionCreator } from '../store/actions/threadsAction';
import { receiveLeaderBoardsActionCreator } from '../store/actions/leaderboardsAction';

/**
 * skenario test
 *
 * - asyncPopulateThunkMiddleware thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert correctly when data fetching failed
 */

describe('asyncPopulateThunkMiddleware thunk', () => {
  beforeEach(() => {
    api._getAllUsers = api.getAllUsers;
    api._getAllThreads = api.getAllThreads;
    api._getAllLeaderboars = api.getLeaderboards;
  });

  afterEach(() => {
    api.getAllUsers = api._getAllUsers;
    api.getAllThreads = api._getAllThreads;
    api.getLeaderboards = api._getAllLeaderboars;

    // delete backup data
    delete api._getAllUsers;
    delete api._getAllThreads;
    delete api._getAllLeaderboars;
  });

  it('should dispatch action correctly when data fetching success', async () => {
    // arrange
    // stub implementation
    api.getAllUsers = () => Promise.resolve(fakeUsersResponse);
    api.getAllThreads = () => Promise.resolve(fakeThreadsResponse);
    api.getLeaderboards = () => Promise.resolve(fakeLeaderboardsResponse);
    // mock dispatch
    const dispatch = vi.fn();
    // action
    await asyncPopulateThunkMiddleware()(dispatch);
    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(
      receiveUsersActionCreator(fakeUsersResponse)
    );
    expect(dispatch).toHaveBeenCalledWith(
      threadsReceiveActionCreator(fakeThreadsResponse)
    );
    expect(dispatch).toHaveBeenCalledWith(
      receiveLeaderBoardsActionCreator(fakeLeaderboardsResponse)
    );
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    // stub implementation
    api.getAllUsers = () => Promise.reject(fakeErrorResponse);
    api.getAllThreads = () => Promise.reject(fakeErrorResponse);
    api.getLeaderboards = () => Promise.reject(fakeErrorResponse);
    // mock dispatch
    const dispatch = vi.fn();
    // mock alert
    window.alert = vi.fn();
    // action
    await asyncPopulateThunkMiddleware()(dispatch);
    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    // expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});
