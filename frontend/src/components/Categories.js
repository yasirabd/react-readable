import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchCategories, getAllPostsForCategoryAction } from '../actions'
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import HomeIcon from 'material-ui-icons/Home'
import FolderIcon from 'material-ui-icons/Folder'
import Avatar from 'material-ui/Avatar'
import Divider from 'material-ui/Divider'

class Categories extends Component {

  componentDidMount() {
    this.props.getCategories()
  }
  onCategoryClick = (category) => {
    this.props.getAllPostsCategory(category)
  }
  render() {
    const { categories } = this.props
    const list = categories.map((item, index) => {
      return (
        <Link to={`/${item.name}`} className='menu-item' key={item.name}>
          <ListItem button>
            <Avatar>
              <FolderIcon />
            </Avatar>
            <ListItemText primary={item.name} />
          </ListItem>
        </Link>
      )
    })

    return (
      <div>
        <Home />
        <Divider />
        {list}
      </div>
    )
  }
}

const Home = () => {
  return (
    <Link to='/' className='menu-item'>
      <ListItem button>
        <ListItemIcon>
          <HomeIcon className="color-primary" />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
    </Link>
  )
}

const mapStateToProps = ({ category }) => {
  return {
    categories: category.category
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCategories: (data) => dispatch(fetchCategories(data)),
    getAllPostsCategory: (data) => dispatch(getAllPostsForCategoryAction(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(Categories)
