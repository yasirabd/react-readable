import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'

import { createComment, editComment } from '../actions'

import ClearIcon from 'material-ui-icons/Clear'
import SaveIcon from 'material-ui-icons/Save'
import Button from 'material-ui/Button'
import {
  TextField
} from 'redux-form-material-ui'

const required = value => (value == null ? 'Required' : undefined);

let CommentForm = (props) => {
  const { id, postId, handleSubmit, pristine, submitting, hideForm, createComment, editComment } = props

  return (
    <div>
      <form className="comment-form" onSubmit={handleSubmit(data => {
          const { author, body } = data
          data = { author, body }
          if (id) {
            editComment(id, data)
          } else {
            createComment(postId, data)
          }
          hideForm()
        })}
      >
        <div className="form-group">
          <Field
            name="author"
            label="Author"
            component={TextField}
            margin="normal"
            className="small-input"
            validate={required}
          />
        </div>
        <div className="form-group">
          <Field
            name="body"
            label="Body"
            component={TextField}
            margin="normal"
            className="body-input"
            rows="4"
            multiline
            validate={required}
          />
        </div>
        <div className="button-actions">
          <Button variant="raised" onClick={hideForm}>
            <ClearIcon className="icon-button" /> Cancel
          </Button>
          <Button variant="raised" color="primary" type="submit" disabled={pristine || submitting}>
            <SaveIcon className="icon-button" />
            {id ? 'Update' : 'Add'}
          </Button>
        </div>
      </form>
    </div>
  )
}

CommentForm = reduxForm({
  form: 'comment',
  enableReinitialize: true
})(CommentForm)

export default connect(
  undefined,
  { createComment, editComment }
)(CommentForm)
