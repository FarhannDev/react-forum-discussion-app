/* eslint-disable import/no-unresolved */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable import/order */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-useless-fragment */
import { useDispatch } from 'react-redux';
import {
  toggleUpVoteComment,
  toggleDownVoteComment,
} from '../../../store/actions/detailThreadAction';
import { IoThumbsUpOutline, IoThumbsDownOutline } from 'react-icons/io5';
import '../../../assets/styles/thread-card-item.css';

export default function ButtonVoteComment({ id, upVote, downVote }) {
  const dispatch = useDispatch();
  const handleVote = () => dispatch(toggleUpVoteComment(id));
  const handleDownVote = () => dispatch(toggleDownVoteComment(id));

  return (
    <div className="d-flex flex-wrap">
      <div className="thread-card-item__action me-2">
        <div className="thread-card-item__action-vote">
          <button
            onClick={handleVote}
            type="button"
            className="btn btn-vote"
            title="Dukung Naik"
          >
            <div className="d-flex flex-row">
              <IoThumbsUpOutline fontSize={24} />
              <div className="btn-vote__count">{upVote.length}</div>
            </div>
          </button>
          |
          <button
            onClick={handleDownVote}
            type="button"
            className="btn btn-vote"
            title="Dukung Turun"
          >
            <div className="d-flex flex-row">
              <IoThumbsDownOutline fontSize={24} />
              <div className="btn-vote__count">{downVote.length}</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
