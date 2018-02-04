import React from 'react'

import IconButton from 'material-ui/IconButton'
import Avatar from 'material-ui/Avatar'
import ArrowUpIcon from 'material-ui-icons/ArrowUpward'
import ArrowDownIcon from 'material-ui-icons/ArrowDownward'
import './VoteUpDown.css'

const VoteUpDown = ({ voteScore, onUpVote, onDownVote }) => (
  <div className="vote-up-down">
    <IconButton
      aria-label="Vote up"
      onClick={onUpVote}
      className="vote-icon">
      <ArrowUpIcon />
    </IconButton>
    <Avatar className={voteScore >= 0 ? 'vote-score-positive' : 'vote-score-negative'}>
      <span>{voteScore}</span>
    </Avatar>
    <IconButton
      aria-label="Vote down"
      onClick={onDownVote}
      className="vote-icon">
      <ArrowDownIcon />
    </IconButton>
  </div>
)

export default VoteUpDown
