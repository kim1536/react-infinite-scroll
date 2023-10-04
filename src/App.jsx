import React from 'react'
import Header from './components/Header'
import Search from './components/Search'
import InfiniteScrollList from './components/InfiniteScrollList';

const App = () => {
  return (
    <div>
      <Header />
      <Search />
      <InfiniteScrollList />
    </div>
  )
}

export default App