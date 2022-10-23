export default function SearchBar({func ,searchVal, onChange}) {
  return (
    <div className="search-container">
      <input id="queryInput" className="searchBar" value={searchVal} onChange={(e)=>onChange(e.target.value)} placeholder="Search..." />
      {/* <button className="search-button" onClick={func}> */}
      <span onClick={func}>
        <button className="search-button">
        Go
      </button>
      </span>
      
    </div>
  );
}
