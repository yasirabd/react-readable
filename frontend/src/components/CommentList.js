import React, { Component } from 'react'
import CommentListItem from './CommentListItem'
import Typography from 'material-ui/Typography'

class CommentList extends Component {

  render() {
    const { comments } = this.props.comments

    return(
      <div>
        {comments.length > 0
          ? (comments.map(comment => (
            <CommentListItem
              key={comment.id}
              comment={comment} />
            )))
          : <Typography>No comments to display</Typography>
        }
      </div>
    )
  }
}

export default CommentList
