import React from 'react'
import { connect } from 'react-redux'

import { upVotePost, downVotePost } from '../actions'
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
  const { id, title, body, author, category, timestamp, commentCount, voteScore, comments = [], onUpVotePost, onDownVotePost } = props

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

        <Typography type="display2" gutterBottom>
          {title}
        </Typography>

        <PostListItemInfo
          author={author}
          date={timestamp}
          category={category}
          commentCount={commentCount} />

        <div className="post-detail-content">
          <Typography type="body1" gutterBottom>
            {body}
          </Typography>
        </div>

        <div className="button-actions">
          <Button raised color='primary'>
            <ModeEditIcon className='icon-button' /> Edit
          </Button>
          <Button raised color='secondary'>
            <DeleteIcon className='icon-button' /> Delete
          </Button>
        </div>
      </div>
      <Divider />
      <div className='post-detail-comment-list'>
        <CommentList postId={id} comments={comments} />
      </div>
    </div>
  )
}

export default connect(
  undefined,
  { onUpVotePost: upVotePost, onDownVotePost: downVotePost }
)(PostDetails)
