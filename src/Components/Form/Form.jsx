import React, { useState } from 'react'
import ButtonTeal from '../../UI/Buttons/ButtonTeal/ButtonTeal'
import InputTeal from '../../UI/InputTeal/InputTeal'
import classes from './Form.module.css'

const Form = ({ addPost_Func }) => {
  let [info, setInfo] = useState({ title: '', body: '' })

  const addNewPost = (e) => {
    e.preventDefault()
    let newPost = {
      ...info,
      id: Date.now(),
    }
    addPost_Func(newPost)
    setInfo({ title: '', body: '' })
  }
  return (
    <form className={classes.wrapper}>
      <InputTeal
        type="text"
        placeholder="Title"
        value={info.title}
        onChange={(e) => setInfo({ ...info, title: e.target.value })}
      />
      <InputTeal
        type="text"
        placeholder="Body"
        value={info.body}
        onChange={(e) => setInfo({ ...info, body: e.target.value })}
      />
      <ButtonTeal onClick={addNewPost}>Add</ButtonTeal>
    </form>
  )
}

export default Form
