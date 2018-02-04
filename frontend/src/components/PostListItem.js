import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import VoteUpDown from './VoteUpDown'
import { upVotePost, downVotePost } from '../actions'

import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import ModeEditIcon from 'material-ui-icons/ModeEdit'
import DeleteIcon from 'material-ui-icons/Delete'
import './PostListItem.css'

import PostListItemInfo from './PostListItemInfo'

const PostListItem = ({ id, title, author, timestamp, category, commentCount, voteScore, onUpVotePost, onDownVotePost }) => (
  <Paper className='list-item-container post-list-item-container'>
    <VoteUpDown
      onUpVote={() => onUpVotePost(id)}
      onDownVote={() => onDownVotePost(id)}
      voteScore={voteScore}
    />
    <div className='list-item-content post'>
      <Link to={`${category}/${id}`} className='no-decor'>
          <Typography type='headline'>{title}</Typography>
      </Link>
      <PostListItemInfo
        author={author}
        date={timestamp}
        commentCount={commentCount}
        category={category} />
    </div>
    <div className='list-item-actions'>
      <Button raised color='primary'>
        <ModeEditIcon className='icon-button' /> Edit
      </Button>
      <Button raised color='secondary'>
        <DeleteIcon className='icon-button' /> Delete
      </Button>
    </div>
  </Paper>
)


export default connect(
  undefined,
  { onUpVotePost: upVotePost, onDownVotePost: downVotePost }
)(PostListItem)
