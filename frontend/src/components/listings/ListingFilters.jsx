import './ListingFilters.css';

const ListingFilters = ({ search, status, sort }) => {
  return (
    <div className="filters-container">

      <input
        type="text"
        placeholder="Search apartments..."
        value={search.value}
        onChange={(e) => search.onChange(e.target.value)}
        className="filter-input"
      />

      <select
        value={status.value}
        onChange={(e) => status.onChange(e.target.value)}
        className="filter-select"
      >
        <option value="All">All Statuses</option>
        {status.options.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>

      <select
        value={sort}
        onChange={(e) => sort.onChange(e.target.value)}
        className="filter-select"
      >
        <option value="">No sorting</option>
        <option value="price_desc">Price: high to low</option>
        <option value="price_asc">Price: low to high</option>
        <option value="bedrooms">Bedrooms</option>
      </select>

    </div>
  )
}

export default ListingFilters;
