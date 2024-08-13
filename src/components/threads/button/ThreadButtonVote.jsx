import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import {
  IoThumbsUpOutline,
  IoThumbsDownOutline,
  IoThumbsDown,
  IoThumbsUp,
} from 'react-icons/io5';
import {
  asyncAddThreadsUpVote,
  asyncAddThreadsDownVote,
  asyncAddThreadsNeutralVote,
} from '../../../store/actions/threadsAction';
import { useNavigate } from 'react-router-dom';

export default function ThreadButtonVote({ threadId, upVotes, downVotes }) {
  const { authUser } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpVote = () => {
    if (authUser) {
      toast.info('Kamu menyukai diskusi ini!');
      dispatch(asyncAddThreadsUpVote(threadId));
    } else {
      navigate('/login');
    }
  };

  const handleDownVote = () => {
    if (authUser) {
      toast.info('Kamu batal menyukai diskusi ini!');
      dispatch(asyncAddThreadsDownVote(threadId));
    } else {
      navigate('/login');
    }
  };

  const handleClearVote = () => {
    if (authUser) {
      toast.info('Kamu batal menyukai diskusi ini!');
      dispatch(asyncAddThreadsNeutralVote(threadId));
    } else {
      navigate('/login');
    }
  };

  const isVotes = upVotes.find((vote) => vote === authUser?.id);
  const isUnvotes = downVotes.find((unvote) => unvote === authUser?.id);

  return (
    <div className="thread-card-item__action me-2">
      <div className="thread-card-item__action-vote">
        <button
          type="button"
          className="btn btn-vote"
          title="Sukai Diskusi Ini"
          onClick={isVotes ? handleClearVote : handleUpVote}
        >
          <div className="d-flex flex-row">
            {isVotes ? (
              <IoThumbsUp fontSize={24} color="#ff0000" />
            ) : (
              <IoThumbsUpOutline fontSize={24} />
            )}
            {/* <IoThumbsUpOutline fontSize={24} /> */}

            <div className="btn-vote__count">{upVotes.length}</div>
          </div>
        </button>
        |
        <button
          type="button"
          className="btn btn-vote"
          title="Batal Sukai"
          onClick={isUnvotes ? handleClearVote : handleDownVote}
        >
          <div className="d-flex flex-row">
            {isUnvotes ? (
              <IoThumbsDown fontSize={24} color="#ff0000" />
            ) : (
              <IoThumbsDownOutline fontSize={24} />
            )}

            <div className="btn-vote__count">{downVotes.length}</div>
          </div>
        </button>
      </div>
    </div>
  );
}

ThreadButtonVote.propTypes = {
  threadId: PropTypes.string.isRequired,
  upVotes: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotes: PropTypes.arrayOf(PropTypes.string).isRequired,
};
