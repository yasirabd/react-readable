import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCategories } from '../actions'

class Categories extends Component {

  componentDidMount() {
    this.props.getCategories()
  }

  render() {
    const { categories } = this.props
    const list = categories.map((item, index) => <li key={index}>{item.name}</li>)

    return (
      <div>
        <ul>
          {list}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ category }) => {
  return {
    categories: category.category
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCategories: (data) => dispatch(fetchCategories(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories)
