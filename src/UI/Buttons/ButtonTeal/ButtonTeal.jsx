import React from 'react'
import classes from './ButtonTeal.module.css'

const ButtonTeal = ({ children, ...props }) => {
  return (
    <button className={classes.buttonTeal} {...props}>
      {children}
    </button>
  )
}

export default ButtonTeal
