import "./SearchBar.css"

const SearchBar = ({dataFilter}) => {

  const handlerFilter = event => dataFilter.setFilter(event.target.value)

  return (
    <div>
      <p className="mt-0">
        <input type="text" id="filter" name="search" placeholder="Filter by name.." onChange={handlerFilter}/>
      </p>
    </div>
  )
}

export default SearchBar