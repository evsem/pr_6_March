import React, { useState } from 'react'
import Form from './Components/Form/Form'
import List from './Components/List/List'
import './Style/App.css'

const App = () => {
  let [posts, setPosts] = useState([
    { id: 1, title: 'France', body: 'Europe' },
    { id: 2, title: 'Japan', body: 'Asia' },
    { id: 3, title: 'Mexico', body: 'America' },
  ])

  const addNewPost = (newPost) => {
    setPosts([newPost, ...posts])
  }
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }
  return (
    <div className="App">
      <Form addPost_Func={addNewPost} />

      {posts.length ? (
        <List posts={posts} removePost={removePost} />
      ) : (
        <h2 className="App_titleWarning">No posts</h2>
      )}
    </div>
  )
}

export default App
