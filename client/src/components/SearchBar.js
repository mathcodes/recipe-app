export default function SearchBar(props) {
  return (
    <div className="m-4" width="16rem">
      <input id="queryInput" className="searchBar" placeholder="Search..." />
      <button className="searchButton" onClick={props.func} type="submit">
        Go
      </button>
    </div>
  );
}
