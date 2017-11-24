import React, { Component } from 'react'
import { connect } from 'react-redux'
import VoteUpDown from './VoteUpDown'
import { upVoteAction, downVoteAction } from '../actions'

import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import ModeEditIcon from 'material-ui-icons/ModeEdit'
import DeleteIcon from 'material-ui-icons/Delete'
import './PostListItem.css'

import PostInfo from './PostInfo'

class PostListItem extends Component {

  state = {
    score: 0,
  }

  onClickUpVote = (id) => {
    this.props.upVote(id)
    this.setState({ score: this.state.score+1 })
  }

  onClickDownVote = (id) => {
    this.props.downVote(id)
    this.setState({ score: this.state.score-1 })
  }

  componentDidMount() {
    const { voteScore } = this.props.post
    this.setState({ score: voteScore })
  }

  render() {
    const { title, author, id, timestamp, category } = this.props.post
    const { score } = this.state

    return(
      <Paper className='list-item-container post-list-item-container'>
        <VoteUpDown
          id={id}
          score={score}
          onClickUpVote={this.onClickUpVote}
          onClickDownVote={this.onClickDownVote}
        />
        <div className='list-item-content post'>
          <Typography type='headline'>{title}</Typography>
          <PostInfo
            author={author}
            date={timestamp}
            category={category} />
        </div>
        <div className='list-item-actions'>
          <Button raised color='primary'>
            <ModeEditIcon className='icon-button' /> Edit
          </Button>
          <Button raised color='accent'>
            <DeleteIcon className='icon-button' /> Delete
          </Button>
        </div>
      </Paper>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    upVote: (id) => dispatch(upVoteAction(id)),
    downVote: (id) => dispatch(downVoteAction(id)),
  }
}

export default connect(null, mapDispatchToProps)(PostListItem)
