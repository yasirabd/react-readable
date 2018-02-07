import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { reduxForm, Field } from 'redux-form'

import { createPost, editPost } from '../actions'

import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import { FormControl } from 'material-ui/Form'
import { InputLabel } from 'material-ui/Input'
import { MenuItem } from 'material-ui/Menu'
import Button from 'material-ui/Button'
import SaveIcon from 'material-ui-icons/Save'
import {
  TextField,
  Select
} from 'redux-form-material-ui'
import './PostForm.css'

const required = value => (value == null ? 'Required' : undefined);

const PostForm = (props) => {
  const { handleSubmit, pristine, submitting, categories, createPost, editPost, history, match } = props
  const isEdit = match.url.indexOf('edit') !== -1

  return (
    <div className="add-post-container">
      <Typography variant="display2" gutterBottom>
        {isEdit ? 'Update Post' : 'Add Post'}
      </Typography>
      <Paper className="post-form-container">
        <form className="post-form" onSubmit={handleSubmit(data => {
          const { title, body, author, category = categories[0].name } = data
          data = { title, body, author, category }
          if(isEdit) {
           editPost(match.params.id, data);
         } else {
           createPost(data);
         }
          history.goBack()
          })}
        >
          <div className="form-group">
            <Field
              name="title"
              label="Title"
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
          <FormControl margin="normal" className="category-group">
            <InputLabel htmlFor="category">Category</InputLabel>
            <Field name='category' component={Select} validate={required}>
              {categories.map((category, index) =>
                <MenuItem key={index} value={category.name}>{category.name}</MenuItem>
              )}
            </Field>
          </FormControl>
          <div className="form-group">
            <Button
              variant="raised"
              color="primary"
              className="submit-btn"
              type="submit"
              disabled={pristine || submitting}
            >
              <SaveIcon className="icon-button" />
              {isEdit ? 'Update' : 'Add'}
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
