import React from 'react'
import { connect } from 'react-redux'

import VoteUpDown from './VoteUpDown'
import { dateTimeFormat } from '../utils/date'
import { upVoteComment, downVoteComment } from '../actions'

import Paper from 'material-ui/Paper'
import AccountCircleIcon from 'material-ui-icons/AccountCircle'
import AccessTimeIcon from 'material-ui-icons/AccessTime'
import ModeEditIcon from 'material-ui-icons/ModeEdit'
import DeleteIcon from 'material-ui-icons/Delete'
import Button from 'material-ui/Button'
import './CommentListItem.css'

const CommentListItem = ({ id, body, author, timestamp, voteScore, onUpVoteComment, onDownVoteComment }) => {
  return (
    <Paper className='list-item-container'>
      <VoteUpDown
        voteScore={voteScore}
        onUpVote={() => onUpVoteComment(id)}
        onDownVote={() => onDownVoteComment(id)}
      />

      <div className='list-item-content'>
        <div className='meta-container'>
          <span className="meta-item">
            <AccountCircleIcon className="meta-icon" />
            <span>{author}</span>
          </span>
          <span className="meta-item">
            <AccessTimeIcon className="meta-icon" />
            <span>{dateTimeFormat(timestamp)}</span>
          </span>
        </div>

        <div className='comment-body'>
          {body}
        </div>
      </div>
      <div className='list-item-actions'>
        <Button raised color='primary'>
          <ModeEditIcon className='icon-button' /> Edit
        </Button>
        <Button raised color='secondary'>
          <DeleteIcon className='icon-button' /> Delete
        </Button>
      </div>
    </Paper>
  )
}

export default connect(
  undefined,
  { onUpVoteComment: upVoteComment, onDownVoteComment: downVoteComment }
)(CommentListItem)
