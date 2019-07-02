import React from 'react'
import SearchListItem from './SearchListItem'


const SearchList = props => {
  const busList = props.search
  const generateItems = () => (
    busList.items.map(item => (
      <SearchListItem
        key={item.id}
        item={item}
      />
    ))
  )
  return (
    <div className="search-list">
      <div className="search-result-company">
        {busList.company}
      </div>
      {/*<div>{busList.target_date}</div>*/}
      {/*<div>{busList.url}</div>*/}
      {generateItems()}
    </div>
  )
}

export default SearchList
