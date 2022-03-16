import React from 'react'
import InputTeal from '../../UI/InputTeal/InputTeal'
import SelectTeal from '../../UI/SelectTeal/SelectTeal'
import classes from './Filter.module.css'

const Filter = ({ filter, setFilter }) => {
  return (
    <div className={classes.wrapper}>
      <InputTeal
        type="text"
        placeholder="Search"
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      />
      <SelectTeal
        options={[
          { name: 'By title', value: 'title' },
          { name: 'By description', value: 'body' },
        ]}
        defaultValue="Sorting"
        value={filter.sort}
        onChange={(sortPosts) => setFilter({ ...filter, sort: sortPosts })}
      />
    </div>
  )
}

export default Filter
