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

// class PostDetails extends Component {
//
//   componentDidMount() {
//     const { id } = this.props.match.params
//     this.props.getPost(id)
//   }
//
//   render(){
//     const { post, onUpVotePost, onDownVotePost } = this.props.post
//     const { comments } = this.props.post.post
//     return(
//       <div>
//         <div className="post-detail-container">
//           <Typography type="display2" gutterBottom>
//             {post.title}
//           </Typography>
//
//           <PostListItemInfo
//             author={post.author}
//             date={post.timestamp}
//             category={post.category} />
//
//           <div className="post-detail-content">
//             <Typography type="body1" gutterBottom>
//               {post.body}
//             </Typography>
//           </div>
//
//           <div className="button-actions">
//             <Button raised color='primary'>
//               <ModeEditIcon className='icon-button' /> Edit
//             </Button>
//             <Button raised color='accent'>
//               <DeleteIcon className='icon-button' /> Delete
//             </Button>
//           </div>
//         </div>
//         <Divider />
//         <div className='post-detail-comment-list'>
//           <CommentList comments={comments} />
//         </div>
//       </div>
//     )
//   }
// }
//
// const mapStateToProps = ({ post }) => {
//   return {
//     post: post
//   }
// }
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     getPost: (id) => dispatch(fetchPost(id)),
//   }
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(PostDetails)

const PostDetails = (props) => {
  const { id, title, body, author, category, timestamp, voteScore, comments = [], onUpVotePost, onDownVotePost } = props

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
          category={category} />

        <div className="post-detail-content">
          <Typography type="body1" gutterBottom>
            {body}
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
