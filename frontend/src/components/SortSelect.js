import React from 'react'
import { connect } from 'react-redux'

import { setSortBy } from '../actions'

import Select from 'material-ui/Select'
import { MenuItem } from 'material-ui/Menu'

const SortSelect = ({ content, sortBy, onSelectSortBy }) => {
  console.log(content)
  const getValueFromParams = ({ [content]: { type, order } }) => `${type}-${order}`
  const getParamsFromValue = (value) => value.split('-')

  return (
    <div className="sort-select-container">
      <span className="sort-by">
        <Select value={getValueFromParams(sortBy)}
                onChange={(event) => onSelectSortBy(content)(...getParamsFromValue(event.target.value))}>
          <MenuItem value='voteScore-descending'>Score: Highest to lowest</MenuItem>
          <MenuItem value='voteScore-ascending'>Score: Lowest to highest</MenuItem>
          <MenuItem value='timestamp-descending'>Posted Date: Newest to oldest</MenuItem>
          <MenuItem value='timestamp-ascending'>Posted Date: Oldest to newest</MenuItem>
        </Select>
      </span>
    </div>
  )
}

const mapStateToProps = ({ sortBy }) => ({
  sortBy
})

const mapDispatchToProps = (dispatch) => ({
  onSelectSortBy: (content) => (type, order) => dispatch(setSortBy(content, type, order))
})

export default connect(mapStateToProps, mapDispatchToProps)(SortSelect)
