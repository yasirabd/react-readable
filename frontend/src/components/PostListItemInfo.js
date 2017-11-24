import React, { Component } from 'react'
import { dateTimeFormat } from '../utils/date'
import AccountCicleIcon from 'material-ui-icons/AccountCircle'
import AccessTimeIcon from 'material-ui-icons/AccessTime'
import FolderIcon from 'material-ui-icons/Folder'
import CommentIcon from 'material-ui-icons/Comment'

class PostListItemInfo extends Component {

  render() {
    const { author, category, date } = this.props

    return (
      <div className='meta-container'>
        <AccountCicleIcon />
        <span className='meta-item'>{author}</span>
        <AccessTimeIcon />
        <span className='meta-item'>{dateTimeFormat(date)}</span>
        <FolderIcon />
        <span className='meta-item'>{category}</span>
        <CommentIcon />
        <span className='meta-item'>9999 Comment</span>
      </div>
    )
  }
}

export default PostListItemInfo
