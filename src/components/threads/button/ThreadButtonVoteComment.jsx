/* eslint-disable react/require-default-props */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable import/order */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-useless-fragment */
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import {
  toggleUpVoteComment,
  toggleDownVoteComment,
  toggleClearVoteComment,
} from '../../../store/actions/detailThreadAction';
import {
  IoThumbsUpOutline,
  IoThumbsDownOutline,
  IoThumbsDown,
  IoThumbsUp,
} from 'react-icons/io5';
import '../../../assets/styles/thread-card-item.css';

export default function ThreadButtonVoteComment({
  commentId,
  upVote,
  downVote,
}) {
  const { authUser } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleVote = () => {
    toast.info('Kamu menyukai diskusi ini!');
    dispatch(toggleUpVoteComment(commentId));
  };
  const handleDownVote = () => {
    toast.info('Kamu batal menyukai diskusi ini!');
    dispatch(toggleDownVoteComment(commentId));
  };
  const handleClearVote = () => {
    toast.info('Kamu batal menyukai diskusi ini!');
    dispatch(toggleClearVoteComment(commentId));
  };

  const isVotes = upVote.find((vote) => vote === authUser.id);
  const isUnvotes = downVote.find((unvote) => unvote === authUser.id);

  return (
    <div className="d-flex flex-wrap">
      <div className="thread-card-item__action me-2">
        <div className="thread-card-item__action-vote">
          <button
            onClick={isVotes ? handleClearVote : handleVote}
            type="button"
            className="btn btn-vote"
            title="Sukai Diskusi"
          >
            <div className="d-flex flex-row">
              {isVotes ? (
                <IoThumbsUp fontSize={24} />
              ) : (
                <IoThumbsUpOutline fontSize={24} />
              )}
              <div className="btn-vote__count">{upVote.length}</div>
            </div>
          </button>
          |
          <button
            onClick={isUnvotes ? handleClearVote : handleDownVote}
            type="button"
            className="btn btn-vote"
            title="Dukung Turun"
          >
            <div className="d-flex flex-row">
              {isUnvotes ? (
                <IoThumbsDown fontSize={24} />
              ) : (
                <IoThumbsDownOutline fontSize={24} />
              )}
              <div className="btn-vote__count">{downVote.length}</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

ThreadButtonVoteComment.propTypes = {
  commentId: PropTypes.string.isRequired,
  downVote: PropTypes.arrayOf(PropTypes.string).isRequired,
  upVote: PropTypes.arrayOf(PropTypes.string).isRequired,
};
