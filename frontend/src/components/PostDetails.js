import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

import { upVotePost, downVotePost, deletePost } from '../actions'
import VoteUpDown from './VoteUpDown'
import PostListItemInfo from './PostListItemInfo'
import CommentList from './CommentList'

import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import ModeEditIcon from 'material-ui-icons/ModeEdit'
import DeleteIcon from 'material-ui-icons/Delete'
import Divider from 'material-ui/Divider'
import './PostDetails.css'

const PostDetails = (props) => {
  const { history, id, title, body, author, category, timestamp, voteScore, comments = [],
          onUpVotePost, onDownVotePost, onDeletePost } = props

  return (
    <div>
      <div className="post-detail-container">
        <div className="post-detail-voting">
          <VoteUpDown
            onUpVote={() => onUpVotePost(id)}
            onDownVote={() => onDownVotePost(id)}
            voteScore={voteScore}
          />
        </div>
        <Typography variant="display2" gutterBottom>
          {title}
        </Typography>
        <PostListItemInfo
          author={author}
          date={timestamp}
          category={category}
          commentCount={comments.length} />
        <div className="post-detail-content">
          <Typography variant="body1" gutterBottom>
            {body}
          </Typography>
        </div>
        <div className="button-actions">
          <Link to={`/posts/edit/${id}`} className='no-decor'>
            <Button variant="raised" color='primary'>
              <ModeEditIcon className='icon-button' /> Edit
            </Button>
          </Link>
          <Link to='/' className='no-decor' onClick={(event) => {
            event.preventDefault()
            onDeletePost(id)
            history.push('/')
          }}>
            <Button variant="raised" color='secondary'>
              <DeleteIcon className='icon-button' /> Delete
            </Button>
          </Link>
        </div>
      </div>
      <Divider />
      <div className='post-detail-comment-list'>
        <Typography variant="display1" gutterBottom>
          Comments
        </Typography>
        <CommentList postId={id} comments={comments} />
      </div>
    </div>
  )
}

export default withRouter(connect(
  undefined,
  { onUpVotePost: upVotePost,
    onDownVotePost: downVotePost,
    onDeletePost: deletePost }
)(PostDetails))
