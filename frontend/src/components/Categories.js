import React, { Component } from 'react'

import { getAllCategories } from '../utils/ReadableAPI'

class Categories extends Component {

  state = {
    categories: []
  }

  componentDidMount() {
    getAllCategories()
      .then(categories => {
        const items = categories.map(item => item.name)
        this.setState({ categories: items })
      })
  }

  render() {
    const { categories } = this.state
    const list = categories.map((item, index) => <li key={index}>{item}</li>)

    return (
      <div>
        <ul>
          {list}
        </ul>
      </div>
    )
  }
}

export default Categories
