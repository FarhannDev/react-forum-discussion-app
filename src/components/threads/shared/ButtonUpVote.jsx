/* eslint-disable react/react-in-jsx-scope */
import { IoThumbsUpOutline } from 'react-icons/io5';
import '../../../assets/styles/thread-card-item.css';

export default function ButtonUpVote() {
  return (
    <button type="button" className="btn btn-vote" title="Dukung Naik">
      <div className="d-flex flex-row">
        <IoThumbsUpOutline fontSize={24} />
        <div className="btn-vote__count">{0}</div>
      </div>
    </button>
  );
}
