import React from 'react'
import classes from './Item.module.css'
import ButtonTeal from '../../UI/Buttons/ButtonTeal/ButtonTeal'

const Item = ({ post, number, removePost }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <h3 className={classes.container_titlePost}>
          {number}. {post.title}
        </h3>
        <p className={classes.container_infoAboutPost}>{post.body}</p>
      </div>
      <ButtonTeal onClick={() => removePost(post)}>Delete</ButtonTeal>
    </div>
  )
}

export default Item
