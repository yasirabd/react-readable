import React, { Component } from 'react'
import CommentListItem from './CommentListItem'

class CommentList extends Component {

  render() {
    const { comments } = this.props

    return(
      <div>
        {comments.length === 0
         ? <p><em>No Comments Dude!</em></p>
         : comments.map(comment =>
           <CommentListItem
             key={comment.id}
             comment={comment}
           />)}
      </div>
    )
  }
}

export default CommentList
