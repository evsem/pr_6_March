import React, { useState } from 'react'
import PostService from './API/PostService'
import Filter from './Components/Filter/Filter'
import Form from './Components/Form/Form'
import List from './Components/List/List'
import { useFetching } from './Hooks/useFetching'
import { usePosts } from './Hooks/usePosts'
import './Style/App.css'
import { getPageCount } from './Utils/ForPages'

const App = () => {
  let [posts, setPosts] = useState([
    { id: 1, title: 'France', body: 'Europe' },
    { id: 2, title: 'Japan', body: 'Asia' },
    { id: 3, title: 'Mexico', body: 'America' },
  ])
  let [filter, setFilter] = useState({ sort: '', query: '' })
  let searchedAndSelectedPosts = usePosts(posts, filter.sort, filter.query)
  let [totalPages, setTotalPages] = useState('')
  let [limit, setLimit] = useState(10)
  let [page, setPage] = useState(1)

  let [fetchPosts, isPostLoading, errorPost] = useFetching(async () => {
    let serverPosts = await PostService.getAll(limit, page)
    setPosts(serverPosts.data)
    let totalCount = serverPosts.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit))
  })

  const addNewPost = (newPost) => {
    setPosts([newPost, ...posts])
  }
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }
  return (
    <div className="App">
      <Form addPost_Func={addNewPost} />
      <Filter filter={filter} setFilter={setFilter} />

      {searchedAndSelectedPosts.length ? (
        <List posts={searchedAndSelectedPosts} removePost={removePost} />
      ) : (
        <h2 className="App_titleWarning">No posts</h2>
      )}
    </div>
  )
}

export default App
