import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPost, upVoteAction, downVoteAction } from '../actions'
import VoteUpDown from './VoteUpDown'
import PostListItemInfo from './PostListItemInfo'

import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import ModeEditIcon from 'material-ui-icons/ModeEdit'
import DeleteIcon from 'material-ui-icons/Delete'
import './PostDetails.css'

class PostDetails extends Component {

  componentDidMount() {
    const { id } = this.props.match.params
    this.props.getPost(id)
  }

  onClickDownVote = (id) => {
    this.props.downVote(id)
  }

  onClickUpVote = (id) => {
    this.props.upVote(id)
  }

  render(){
    const { post } = this.props.post
    return(
      <div>
        <div className="post-detail-container">
          <div className="post-detail-voting">
            <VoteUpDown
              id={post.id}
              score={post.voteScore}
              onClickUpVote={this.onClickUpVote}
              onClickDownVote={this.onClickDownVote}
            />
          </div>
          <Typography type="display2" gutterBottom>
            {post.title}
          </Typography>

          <PostListItemInfo
            author={post.author}
            date={post.timestamp}
            category={post.category} />

          <div className="post-detail-content">
            <Typography type="body1" gutterBottom>
              {post.body}
            </Typography>
          </div>

          <div className="button-actions">
            <Button raised color='primary'>
              <ModeEditIcon className='icon-button' /> Edit
            </Button>
            <Button raised color='accent'>
              <DeleteIcon className='icon-button' /> Delete
            </Button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ post }) => {
  return {
    post: post
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPost: (id) => dispatch(fetchPost(id)),
    upVote: (id) => dispatch(upVoteAction(id)),
    downVote: (id) => dispatch(downVoteAction(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails)
