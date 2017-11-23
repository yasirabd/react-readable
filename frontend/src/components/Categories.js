import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchCategories, getAllPostsForCategoryAction } from '../actions'

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
        <li key={index}>
          <Link to={`/${item.name}`}>{item.name}</Link>
        </li>
      )
    })

    return (
      <div>
        <ul>
          <Home />
          {list}
        </ul>
      </div>
    )
  }
}

const Home = () => {
  return (
    <li key='Home'>
      <Link to='/'>Home</Link>
    </li>
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
