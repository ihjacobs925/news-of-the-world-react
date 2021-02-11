export const SearchBar = (props) => {
    return (
        <div className="search-bar">
            <form>
                <input type="text" placeholder="Search for more News" name="search" onChange={props.setSearchTerm}/>
                <input type="submit" value="Submit" onClick={props.searchQuery} id={props.query}/>
            </form>
        </div>
    )
}