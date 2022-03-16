import React from 'react'
import classes from './SelectTeal.module.css'

const SelectTeal = ({ options, defaultValue, value, onChange }) => {
  return (
    <select
      className={classes.selectTeal}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option disabled>{defaultValue}</option>

      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  )
}

export default SelectTeal
