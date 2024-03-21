import { useState  } from 'react'
import './searchfrom.css'
const SearchFrom = ({ getQuerry }) => {

    const [search, setSearch] = useState('')

    const getSearch = e => {
        e.preventDefault();
        getQuerry(search)
    }

    const updateSearch = e => {
        setSearch(e.target.value)
    }

    return (
        <form 
            onSubmit={getSearch}
            className="search-form">
            <input 
                type="text" 
                className="search-bar" 
                value={search} 
                placeholder="Search Recipe"
                onChange={updateSearch}
            />
            <button type="submit" className="search-button">
                Search
            </button>
        </form>
    )
}

export default SearchFrom
