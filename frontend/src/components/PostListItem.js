import React, { Component } from 'react'
import { connect } from 'react-redux'
import VoteUpDown from './VoteUpDown'
import { upVoteAction, downVoteAction } from '../actions'

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
    const { title, author, id } = this.props.post
    const { score } = this.state

    return(
      <div className="Post">
        <Title title={title} />
        <Author author={author} />
        <Comments />
        <VoteUpDown
          id={id}
          score={score}
          onClickUpVote={this.onClickUpVote}
          onClickDownVote={this.onClickDownVote}
        />
        <Edit />
        <Delete />
      </div>
    )
  }
}

const Title = (props) => <div>{props.title}</div>
const Author = (props) => <div>{props.author}</div>
const Comments = () => <div>Comments</div>
const Edit = () => <div>Edit</div>
const Delete = () => <div>Delete</div>


const mapDispatchToProps = (dispatch) => {
  return {
    upVote: (id) => dispatch(upVoteAction(id)),
    downVote: (id) => dispatch(downVoteAction(id)),
  }
}

export default connect(null, mapDispatchToProps)(PostListItem)
