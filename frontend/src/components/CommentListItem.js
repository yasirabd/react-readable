import React, { Component } from 'react'
import { dateTimeFormat } from '../utils/date'
import { connect } from 'react-redux'
import { upVoteCommentAction, downVoteCommentAction } from '../actions'
import VoteUpDown from './VoteUpDown'

import Paper from 'material-ui/Paper'
import AccountCircleIcon from 'material-ui-icons/AccountCircle'
import AccessTimeIcon from 'material-ui-icons/AccessTime'
import ModeEditIcon from 'material-ui-icons/ModeEdit'
import DeleteIcon from 'material-ui-icons/Delete'
import Button from 'material-ui/Button'
import './CommentListItem.css'

class CommentListItem extends Component {
  state = {
    score: 0,
  }

  onClickUpVote = (id) => {
    this.props.upVoteComment(id)
  }

  onClickDownVote = (id) => {
    this.props.downVoteComment(id)
  }

  render () {
    const { comment } = this.props
    console.log(comment)
    return(
      <Paper className='list-item-container'>
        <VoteUpDown
          id={comment.id}
          score={comment.voteScore}
          onClickUpVote={this.onClickUpVote}
          onClickDownVote={this.onClickDownVote}
        />
        <div className='list-item-content'>
          <div className='meta-container'>
            <span className="meta-item">
              <AccountCircleIcon className="meta-icon" />
              <span>{comment.author}</span>
            </span>
            <span className="meta-item">
              <AccessTimeIcon className="meta-icon" />
              <span>{dateTimeFormat(comment.timestamp)}</span>
            </span>
          </div>

          <div className='comment-body'>
            {comment.body}
          </div>
        </div>
        <div className='list-item-actions'>
          <Button raised color='primary'>
            <ModeEditIcon className='icon-button' /> Edit
          </Button>
          <Button raised color='accent'>
            <DeleteIcon className='icon-button' /> Delete
          </Button>
        </div>
      </Paper>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    upVoteComment: (id) => dispatch(upVoteCommentAction(id)),
    downVoteComment: (id) => dispatch(downVoteCommentAction(id)),
  }
}

export default connect(null, mapDispatchToProps)(CommentListItem)
