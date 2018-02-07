import React, { Component } from 'react'
import CommentListItem from './CommentListItem'
import CommentForm from './CommentForm'

import Button from 'material-ui/Button'
import AddIcon from 'material-ui-icons/Add'
import Divider from 'material-ui/Divider'
import './CommentList.css'

class CommentList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      displayForm: false,
      commentToEdit: {}
    }
    this.showCommentForm = this.showCommentForm.bind(this)
    this.hideCommentForm = this.hideCommentForm.bind(this)
  }

  filterCommentById(comments, id) {
    return comments.filter(comment => comment.id === id)
  }

  showCommentForm(comment) {
    this.setState({ displayForm: true, commentToEdit: comment })
  }

  hideCommentForm() {
    this.setState({ displayForm: false, commentToEdit: {} })
  }

  render() {
    const { postId, comments } = this.props
    const { displayForm, commentToEdit } = this.state

    return(
      <div>
        <div className="button-body">
          <Button
            variant="raised"
            onClick={(event) => {
              event.preventDefault()
              this.showCommentForm()
            }}
          >
            <AddIcon className='icon-button' /> Add Comment
          </Button>
        </div>
        <div className="comment-form-body">
          {displayForm &&
            <CommentForm
              initialValues={commentToEdit}
              hideForm={this.hideCommentForm}
              id={commentToEdit && commentToEdit.id}
              postId={postId}
            />
          }
        </div>
        <div>
          {comments.length === 0
           ? <p><em>No Comments Dude!</em></p>
           : comments.map(comment =>
             <CommentListItem
               key={comment.id}
               showForm={(event) => {
                 event.preventDefault()
                 this.showCommentForm(comment)
               }}
               {...comment}
             />)
          }
        </div>
      </div>
    )
  }
}

export default CommentList
