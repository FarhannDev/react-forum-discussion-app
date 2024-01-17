/* eslint-disable operator-linebreak */
/* eslint-disable no-undef */
/* eslint-disable comma-dangle */
/* eslint-disable no-console */
/* eslint-disable consistent-return */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-return-await */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
const api = (() => {
  const API_BASE_URL = 'https://forum-api.dicoding.dev/v1';
  const putAccessToken = (token) => localStorage.setItem('token', token);
  const getAccessToken = () => localStorage.getItem('token');
  const _fetchWithAuth = async (url, options = {}) =>
    fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${getAccessToken()}`,
      },
    });

  const register = async ({ name, email, password }) => {
    const response = await fetch(`${API_BASE_URL}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    });

    const responseData = await response.json();
    const { status, message } = responseData;
    if (status !== 'success') throw new Error(message);
    const {
      data: { user },
    } = responseData;

    return user;
  };

  const login = async ({ email, password }) => {
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const responseData = await response.json();
    const { status, message } = responseData;
    if (status !== 'success') throw new Error(message);
    const {
      data: { token },
    } = responseData;

    return token;
  };

  const createThreads = async ({ title, body, category = '' }) => {
    try {
      const response = await _fetchWithAuth(`${API_BASE_URL}/threads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, body, category }),
      });

      if (!response.ok && response.status !== 'success') {
        const responseErr = await response.json();
        if (!response.ok && response.status === 401) {
          // Contoh penanganan kesalahan otentikasi
          throw new Error(
            'Authentication failed. Please check your credentials.'
          );
        }

        throw new Error(responseErr.message);
      }
      const responseData = await response.json();
      const {
        data: { thread },
      } = responseData;
      return thread;
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  const createComment = async ({ threadId, content }) => {
    try {
      const response = await _fetchWithAuth(
        `${API_BASE_URL}/threads/${threadId}/comments`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ content }),
        }
      );
      if (!response.ok && response.status !== 'success') {
        const responseErr = await response.json();
        if (!response.ok && response.status === 401) {
          // Contoh penanganan kesalahan otentikasi
          throw new Error(
            'Authentication failed. Please check your credentials.'
          );
        }

        throw new Error(responseErr.message);
      }

      const responseData = await response.json();
      const {
        data: { comment },
      } = responseData;
      return comment;
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  const getOwnProfile = async () => {
    try {
      const response = await _fetchWithAuth(`${API_BASE_URL}/users/me`);

      if (!response.ok && response.status !== 'success') {
        const responseErr = await response.json();
        if (!response.ok && response.status === 401) {
          // Contoh penanganan kesalahan otentikasi
          throw new Error(
            'Authentication failed. Please check your credentials.'
          );
        }

        throw new Error(responseErr.message);
      }

      const responseData = await response.json();
      const {
        data: { user },
      } = responseData;

      return user;
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  const getAllUsers = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/users`);
      // Periksa apakah responsenya sukses (status code 200-299)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();
      const {
        data: { users },
      } = responseData;

      return users;
    } catch (error) {
      console.error('Terjadi kesalahan:', error.message);
    }
  };

  const getAllThreads = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/threads`);
      // Periksa apakah responsenya sukses (status code 200-299)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();
      const {
        data: { threads },
      } = responseData;
      return threads;
    } catch (error) {
      console.error('Terjadi kesalahan:', error.message);
    }
  };

  const getDetailThreads = async (threadId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/threads/${threadId}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const responseData = await response.json();
      const {
        data: { detailThread },
      } = responseData;
      return detailThread;
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  const getLeaderboards = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/leaderboards`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();
      const {
        data: { leaderboards },
      } = responseData;

      return leaderboards;
    } catch (error) {
      console.error('Terjadi kesalahan:', error.message);
    }
  };

  const upVoteThreads = async (threadId) => {
    try {
      const response = await _fetchWithAuth(
        `${API_BASE_URL}/threads/${threadId}/up-vote`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        }
      );

      if (!response.ok && response.status !== 'success') {
        const responseErr = await response.json();
        if (!response.ok && response.status === 401) {
          // Contoh penanganan kesalahan otentikasi
          throw new Error(
            'Authentication failed. Please check your credentials.'
          );
        }

        throw new Error(responseErr.message);
      }
      const responseData = await response.json();
      const {
        data: { vote },
      } = responseData;
      return vote;
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  const downVoteThreads = async (threadId) => {
    try {
      const response = await _fetchWithAuth(
        `${API_BASE_URL}/threads/${threadId}/down-vote`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        }
      );

      if (!response.ok && response.status !== 'success') {
        const responseErr = await response.json();
        if (!response.ok && response.status === 401) {
          // Contoh penanganan kesalahan otentikasi
          throw new Error(
            'Authentication failed. Please check your credentials.'
          );
        }

        throw new Error(responseErr.message);
      }

      const responseData = await response.json();
      const {
        data: { vote },
      } = responseData;
      return vote;
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  const neutralizeVoteThreads = async (threadId) => {
    try {
      const response = await _fetchWithAuth(
        `${API_BASE_URL}/threads/${threadId}/neutral-vote`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        }
      );

      if (!response.ok && response.status !== 'success') {
        const responseErr = await response.json();
        if (!response.ok && response.status === 401) {
          // Contoh penanganan kesalahan otentikasi
          throw new Error(
            'Authentication failed. Please check your credentials.'
          );
        }

        throw new Error(responseErr.message);
      }

      const responseData = await response.json();
      const {
        data: { vote },
      } = responseData;
      return vote;
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  const upVoteThreadsComment = async (threadId, commentId) => {
    try {
      const response = await _fetchWithAuth(
        `${API_BASE_URL}/threads/${threadId}/comments/${commentId}/up-vote`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        }
      );
      if (!response.ok && response.status !== 'success') {
        const responseErr = await response.json();
        if (!response.ok && response.status === 401) {
          // Contoh penanganan kesalahan otentikasi
          throw new Error(
            'Authentication failed. Please check your credentials.'
          );
        }

        throw new Error(responseErr.message);
      }

      const responseData = await response.json();
      const {
        data: { vote },
      } = responseData;
      return vote;
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  const downVoteThreadsComment = async (threadId, commentId) => {
    try {
      const response = await _fetchWithAuth(
        `${API_BASE_URL}/threads/${threadId}/comments/${commentId}/down-vote
      `,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        }
      );
      if (!response.ok && response.status !== 'success') {
        const responseErr = await response.json();
        if (!response.ok && response.status === 401) {
          // Contoh penanganan kesalahan otentikasi
          throw new Error(
            'Authentication failed. Please check your credentials.'
          );
        }

        throw new Error(responseErr.message);
      }

      const responseData = await response.json();
      const {
        data: { vote },
      } = responseData;
      return vote;
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  const neutralizeVoteThreadsComment = async (threadId, commentId) => {
    try {
      const response = await _fetchWithAuth(
        `${API_BASE_URL}/threads/${threadId}/comments/${commentId}/neutral-vote
      `,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        }
      );

      if (!response.ok && response.status !== 'success') {
        const responseErr = await response.json();
        if (!response.ok && response.status === 401) {
          // Contoh penanganan kesalahan otentikasi
          throw new Error(
            'Authentication failed. Please check your credentials.'
          );
        }

        throw new Error(responseErr.message);
      }
      const responseData = await response.json();
      const {
        data: { vote },
      } = responseData;
      return vote;
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  return {
    putAccessToken,
    getAccessToken,
    register,
    login,
    getOwnProfile,
    getAllUsers,
    getAllThreads,
    getLeaderboards,
    getDetailThreads,
    createThreads,
    createComment,
    upVoteThreads,
    downVoteThreads,
    neutralizeVoteThreads,
    upVoteThreadsComment,
    downVoteThreadsComment,
    neutralizeVoteThreadsComment,
  };
})();

export default api;
