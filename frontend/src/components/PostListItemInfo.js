import React, { Component } from 'react'
import { dateTimeFormat } from '../utils/date'
import AccountCicleIcon from 'material-ui-icons/AccountCircle'
import AccessTimeIcon from 'material-ui-icons/AccessTime'
import FolderIcon from 'material-ui-icons/Folder'
import CommentIcon from 'material-ui-icons/Comment'

class PostListItemInfo extends Component {

  render() {
    const { author, category, date, commentCount } = this.props

    return (
      <div className='meta-container'>
        <AccountCicleIcon className='meta-icon' />
        <span className='meta-item'>{author}</span>
        <AccessTimeIcon className='meta-icon' />
        <span className='meta-item'>{dateTimeFormat(date)}</span>
        <FolderIcon className='meta-icon' />
        <span className='meta-item'>{category}</span>
        <CommentIcon className='meta-icon' />
        <span className='meta-item'>{commentCount>1 ? commentCount+" comments" : commentCount+" comment"}</span>
      </div>
    )
  }
}

export default PostListItemInfo
