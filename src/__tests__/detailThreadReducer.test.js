/* eslint-disable max-len */
import { describe, expect, it } from 'vitest';
import detailThreadReducer from '../store/reducers/detailThreadReducer';
import ActionType from '../constants/ActionType';

/**
 * test scenario for detailThreadReducer
 *
 * - detailThreadReducer function
 *  - should return the initial state when given by unknown action
 *  - should return the detailThread when given by RECEIVE_THREAD_DETAIL action
 *  - should return the detailThread when given by CLEAR_THREAD_DETAIL action
 *  - should return the threads with the toggled like threads when given by UP_VOTE_THREAD_DETAIL action
 *  - should return the threads with the toggled like threads when given by DOWN_VOTE_THREAD_DETAIL action
 *  - should return the threads with the toggled like threads when given by CLEAR_VOTE_THREAD_DETAIL action
 *  - should return the comment with the new comments users when given by ADD_THREAD_COMMENT action
 *  - should return the threads with the toggled like users comment when given by UP_VOTE_THREAD_DETAIL_COMMENT action
 *  - should return the threads with the toggled like users comment when given by DOWN_VOTE_THREAD_DETAIL_COMMENT action
 *  - should return the threads with the toggled like users comment when given by CLEAR_VOTE_THREAD_DETAIL_COMMENT action
 *
 */

describe('detailThreadReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = [];
    const action = { type: 'UNKNWON' };

    // action
    const nextState = detailThreadReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the detailThread when given by RECEIVE_THREAD_DETAIL action', () => {
    // arrange
    const initialState = [];
    const action = {
      type: ActionType.RECEIVE_THREAD_DETAIL,
      payload: {
        detailThread: {
          id: 'thread-1',
          title: 'Thread Pertama',
          body: 'Ini adalah thread pertama',
          category: 'General',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: [],
          downVotesBy: [],
          comments: [
            {
              id: 'comment-1',
              content: 'Ini adalah komentar pertama',
              createdAt: '2021-06-21T07:00:00.000Z',
              owner: {
                id: 'users-1',
                name: 'John Doe',
                avatar: 'https://generated-image-url.jpg',
              },
              upVotesBy: [],
              downVotesBy: [],
            },
          ],
        },
      },
    };

    // action
    const nextState = detailThreadReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.detailThread);
  });

  it('should return the detailThread when given by CLEAR_THREAD_DETAIL action', () => {
    const initialState = [];
    const action = { type: ActionType.CLEAR_THREAD_DETAIL };

    // action
    const nextState = detailThreadReducer(initialState, action);

    expect(nextState).toEqual(...initialState, null);
  });

  it('should return the threads with the toggled like threads when given by UP_VOTE_THREAD_DETAIL action', () => {
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: [],
          downVotesBy: [],
        },
      ],
    };

    const action = {
      type: ActionType.UP_VOTE_THREAD_DETAIL,
      payload: {
        userId: ['users-1'],
      },
    };

    // action
    const nextState = detailThreadReducer(initialState, action);

    // expect(nextState.upVotesBy).toEqual([]);
    expect(nextState.upVotesBy).toEqual([
      (initialState.upVotesBy = action.payload.userId),
    ]);
  });

  it('should return the threads with the toggled like threads when given by DOWN_VOTE_THREAD_DETAIL action', () => {
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: [],
          downVotesBy: [],
        },
      ],
    };

    const action = {
      type: ActionType.DOWN_VOTE_THREAD_DETAIL,
      payload: {
        userId: ['users-1'],
      },
    };

    // action
    const nextState = detailThreadReducer(initialState, action);

    // expect(nextState.upVotesBy).toEqual([]);
    expect(nextState.downVotesBy).toEqual([
      (initialState.downVotesBy = action.payload.userId),
    ]);
  });

  it('should return the threads with the toggled like threads when given by CLEAR_VOTE_THREAD_DETAIL action', () => {
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: [],
          downVotesBy: [],
        },
      ],
    };

    const action = {
      type: ActionType.CLEAR_VOTE_THREAD_DETAILs,
      payload: {
        userId: ['users-1'],
      },
    };

    // action
    const nextState = detailThreadReducer(initialState, action);

    expect(nextState.upVotesBy).toEqual([]);
    expect(nextState.downVotesBy).toEqual([]);
  });

  it('should return the comment with the new comments users when given by ADD_THREAD_COMMENT action', () => {
    // arrange
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: [],
          downVotesBy: [],
        },
      ],
    };
    const action = {
      type: ActionType.ADD_THREAD_COMMENT,
      payload: {
        comment: {
          id: 'comment-2',
          content: 'Ini adalah komentar pertama',
          createdAt: '2021-06-21T07:00:00.000Z',
          upVotesBy: [],
          downVotesBy: [],
          owner: {
            id: 'users-1',
            name: 'John Doe',
            email: 'john@example.com',
          },
        },
      },
    };

    // action
    const nextState = detailThreadReducer(initialState, action);

    // assert
    expect(nextState.comments.length).toBe(2); // Assuming the new comment is added

    const addNewComment = nextState.comments.find(
      (comment) => comment.id === 'comment-2'
    );

    expect(addNewComment).toBeTruthy();
  });

  it('should return the threads with the toggled like users comment when given by UP_VOTE_THREAD_DETAIL_COMMENT action', () => {
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: [],
          downVotesBy: [],
        },
      ],
    };

    const action = {
      type: ActionType.UP_VOTE_COMMENT_THREAD,
      payload: {
        commentId: 'comment-1',
        userId: 'users-1',
      },
    };

    // action
    const nextState = detailThreadReducer(initialState, action);

    // assert
    const updatedComment = nextState.comments.find(
      (comment) => comment.id === action.payload.commentId
    );

    expect(updatedComment.upVotesBy).toEqual([action.payload.userId]);
  });

  it('should return the threads with the toggled like users comment when given by DOWN_VOTE_THREAD_DETAIL_COMMENT action', () => {
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: [],
          downVotesBy: [],
        },
      ],
    };

    const action = {
      type: ActionType.DOWN_VOTE_COMMENT_THREAD,
      payload: {
        commentId: 'comment-1',
        userId: 'users-1',
      },
    };

    // action
    const nextState = detailThreadReducer(initialState, action);

    // assert
    const updatedComment = nextState.comments.find(
      (comment) => comment.id === action.payload.commentId
    );

    expect(updatedComment.downVotesBy).toEqual([action.payload.userId]);
  });

  it('should return the threads with the toggled like users comment when given by CLEAR_VOTE_THREAD_DETAIL_COMMENT action', () => {
    const initialState = {
      id: 'thread-1',
      title: 'Thread Pertama',
      body: 'Ini adalah thread pertama',
      category: 'General',
      createdAt: '2021-06-21T07:00:00.000Z',
      owner: {
        id: 'users-1',
        name: 'John Doe',
        avatar: 'https://generated-image-url.jpg',
      },
      upVotesBy: [],
      downVotesBy: [],
      comments: [
        {
          id: 'comment-1',
          content: 'Ini adalah komentar pertama',
          createdAt: '2021-06-21T07:00:00.000Z',
          owner: {
            id: 'users-1',
            name: 'John Doe',
            avatar: 'https://generated-image-url.jpg',
          },
          upVotesBy: [],
          downVotesBy: [],
        },
      ],
    };

    const action = {
      type: ActionType.CLEAR_VOTE_COMMENT_THREAD,
      payload: {
        commentId: 'comment-1',
        userId: 'users-1',
      },
    };

    // action
    const nextState = detailThreadReducer(initialState, action);

    // assert
    const updatedComment = nextState.comments.find(
      (comment) => comment.id === action.payload.commentId
    );

    expect(updatedComment.upVotesBy).toEqual([]);
    expect(updatedComment.downVotesBy).toEqual([]);
  });
});
