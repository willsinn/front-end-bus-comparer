import React from 'react'

const SearchListItem = props => {
  console.log(props);
  const bus = props.item
  return(
      <div className="search-list-item">
        <div className="search-info">
          Price: ${bus.price}
        </div>
        <div className="search-info">
          Time: {bus.bus_time}
        </div>
        <div className="search-info">
          Location: {bus.location}
        </div>
      </div>
  )
}

export default SearchListItem
