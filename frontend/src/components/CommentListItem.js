import React, { Component } from 'react'

class CommentListItem extends Component {
  render () {
    const { comment } = this.props

    return(
      <div>
        {comment.body}
      </div>
    )
  }
}

export default CommentListItem
