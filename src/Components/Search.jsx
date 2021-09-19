import React from 'react'

function Search({ searchHandler, searchValue }) {
  return (
    <form className='searchForm'>
      <input className='searchBar' type="text" placeholder="Search by image title ..." value={searchValue} onChange={searchHandler} />
    </form>
  )
}

export default Search
