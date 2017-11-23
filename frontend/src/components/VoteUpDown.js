import React, { Component } from 'react'

import IconButton from 'material-ui/IconButton'
import Avatar from 'material-ui/Avatar'
import ThumbUpIcon from 'material-ui-icons/ThumbUp'
import ThumbDownIcon from 'material-ui-icons/ThumbDown'
import './VoteUpDown.css'

class VoteUpDown extends Component {

  render () {
    return (
      <div className="vote-up-down">
        <IconButton
          aria-label="Vote up"
          onClick={() => this.props.onClickUpVote(this.props.id)}
          className="vote-icon">
          <ThumbUpIcon />
        </IconButton>
        <Avatar className={this.props.score >= 0 ? 'vote-score-positive' : 'vote-score-negative'}>
          <span>{this.props.score}</span>
        </Avatar>
        <IconButton
          aria-label="Vote down"
          onClick={() => this.props.onClickDownVote(this.props.id)}
          className="vote-icon">
          <ThumbDownIcon />
        </IconButton>
      </div>
    )
  }
}

export default VoteUpDown
