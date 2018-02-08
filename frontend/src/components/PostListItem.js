import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

import VoteUpDown from './VoteUpDown'
import { upVotePost, downVotePost, deletePost } from '../actions'

import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import ModeEditIcon from 'material-ui-icons/ModeEdit'
import DeleteIcon from 'material-ui-icons/Delete'
import './PostListItem.css'

import PostListItemInfo from './PostListItemInfo'

const PostListItem = ({ type, history, id, title, author, timestamp, category, comments=[], voteScore,
                        onUpVotePost, onDownVotePost, onDeletePost }) => (
  <Paper className='list-item-container post-list-item-container'>
    <VoteUpDown
      onUpVote={() => onUpVotePost(id)}
      onDownVote={() => onDownVotePost(id)}
      voteScore={voteScore}
    />
    <div className='list-item-content post'>
      <Link to={`/posts/${id}`} className='no-decor'>
          <Typography variant='headline'>{title}</Typography>
      </Link>
      <PostListItemInfo
        author={author}
        date={timestamp}
        commentCount={comments.length}
        category={category} />
    </div>
    <div className='list-item-actions'>
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
  </Paper>
)

export default withRouter(connect(
  undefined,
  { onUpVotePost: upVotePost,
    onDownVotePost: downVotePost,
    onDeletePost: deletePost }
)(PostListItem))
