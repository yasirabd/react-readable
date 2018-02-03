import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import VoteUpDown from './VoteUpDown'
import { upVotePostAction, downVotePostAction } from '../actions'

import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import ModeEditIcon from 'material-ui-icons/ModeEdit'
import DeleteIcon from 'material-ui-icons/Delete'
import './PostListItem.css'

import PostListItemInfo from './PostListItemInfo'

// class PostListItem extends Component {
//
//   // state = {
//   //   score: 0,
//   // }
//   //
//   // onClickUpVote = (id) => {
//   //   this.props.upVote(id)
//   //   this.setState({ score: this.state.score+1 })
//   // }
//   //
//   // onClickDownVote = (id) => {
//   //   this.props.downVote(id)
//   //   this.setState({ score: this.state.score-1 })
//   // }
//   //
//   // componentDidMount() {
//   //   const { voteScore } = this.props.post
//   //   this.setState({ score: voteScore })
//   // }
//
//   render() {
//     const { title, author, id, timestamp, category, voteScore, onUpVotePost, onDownVotePost } = this.props.post
//     // const { score } = this.state
//
//     return(
//       <Paper className='list-item-container post-list-item-container'>
//         <VoteUpDown
//           id={id}
//           score={voteScore}
//           onClickUpVote={() => onUpVotePost(id)}
//           onClickDownVote={() => onDownVotePost(id)}
//         />
//         <div className='list-item-content post'>
//           <Link to={`${category}/${id}`} className='no-decor'>
//               <Typography type='headline'>{title}</Typography>
//           </Link>
//           <PostListItemInfo
//             author={author}
//             date={timestamp}
//             category={category} />
//         </div>
//         <div className='list-item-actions'>
//           <Button raised color='primary'>
//             <ModeEditIcon className='icon-button' /> Edit
//           </Button>
//           <Button raised color='accent'>
//             <DeleteIcon className='icon-button' /> Delete
//           </Button>
//         </div>
//       </Paper>
//     )
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onUpVotePost: (id) => dispatch(upVotePostAction(id)),
//     onDownVotePost: (id) => dispatch(downVotePostAction(id)),
//   }
// }
type Props = {
  post: {
    id: string,
    title: string,
    body: string,
    timestamp: number,
    author: string,
    category: string,
    commentsCount: number,
  },
  onVoteUp: Function,
  onVoteDown: Function,
}

const PostListItem = (props: Props) => {
  const { id, title, author, timestamp, category, commentCount, voteScore } = props.post;

  return (
    <Paper className='list-item-container post-list-item-container'>
      <VoteUpDown
        id={id}
        score={voteScore}
        onClickUpVote={() => props.onUpVotePost(id)}
        onClickDownVote={() => props.onDownVotePost(id)}
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
}

export default connect(
  undefined,
  { onUpVotePost: upVotePostAction, onDownVotePost: downVotePostAction }
)(PostListItem)
