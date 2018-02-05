import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { reduxForm, Field } from 'redux-form'

import { createPost, editPost } from '../actions'

import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import { FormControl, FormHelperText } from 'material-ui/Form'
import { InputLabel } from 'material-ui/Input'
import { MenuItem } from 'material-ui/Menu'
import Button from 'material-ui/Button'
import SaveIcon from 'material-ui-icons/Save'
import {
  TextField,
  SelectField
} from 'redux-form-material-ui'
import './PostForm.css'

const PostForm = (props) => {
  const { handleSubmit, createPost, history, match, categories } = props
  const isEdit = match.url.indexOf('edit') !== -1

  return (
    <div className="add-post-container">
      <Typography variant="display2" gutterBottom>
        {'Add Post'}
      </Typography>
      <Paper className="post-form-container">
        <form className="post-form" onSubmit={handleSubmit(data => {
          const { title, body, category = categories[0].name, author } = data
          data = { title, body, category, author }
          if(isEdit) {
            editPost(match.params.id, data)
          } else {
            createPost(data)
          }
          history.goBack()
          })}
        >
          <div className="form-group">
            <Field
              name="title"
              label="Title"
              component={TextField}
              className="small-input"
              margin="normal"
            />
          </div>
          <div className="form-group">
            <Field
              name="body"
              label="Body"
              component={TextField}
              rows="4"
              multiline
              className="body-input"
              margin="normal"
            />
          </div>
          <div>
            <Field
              name="author"
              label="Author"
              component={TextField}
              className="small-input"
              margin="normal"
            />
          </div>
          <div className="form-group">
            <InputLabel>Category</InputLabel>

          </div>
          <div className="form-group">
            <Button
              variant="raised"
              color="primary"
              className="submit-btn"
            >
              <SaveIcon className="icon-button" />
            </Button>
          </div>
        </form>
      </Paper>
    </div>
  )
}

const mapStateToProps = ({ categories }) => ({
  categories
})

export default reduxForm({
  form: 'post'
})(withRouter(connect(mapStateToProps,
  { createPost, editPost }
)(PostForm)))
