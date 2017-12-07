import React, { Component } from 'react'
import CommentListItem from './CommentListItem'

class CommentList extends Component {

  render() {

    let commentList = null

    if (this.props.comments) {
      commentList = this.props.comments.map(comment => (
        <CommentListItem
          key={comment.id}
          comment={comment} />
      ))
    }
    return(
      <div>
        {commentList}
      </div>
    )
  }
}

export default CommentList
