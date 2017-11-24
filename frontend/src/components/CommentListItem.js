import React, { Component } from 'react'
import { dateTimeFormat } from '../utils/date'

import Paper from 'material-ui/Paper'
import AccountCircleIcon from 'material-ui-icons/AccountCircle'
import AccessTimeIcon from 'material-ui-icons/AccessTime'
import ModeEditIcon from 'material-ui-icons/ModeEdit'
import DeleteIcon from 'material-ui-icons/Delete'
import Button from 'material-ui/Button'
import './CommentListItem.css'

class CommentListItem extends Component {

  render () {
    const { comment } = this.props

    return(
      <Paper className='list-item-container'>
        <div>Vote</div>
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

export default CommentListItem
