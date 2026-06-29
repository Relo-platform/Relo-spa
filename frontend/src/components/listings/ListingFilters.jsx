const ListingFilters = ({ searchQuery, setSearchQuery, statusFilter, setStatusFilter, uniqueStatuses }) => {
  return (
    <div style={{ display: 'flex', gap: '20px', marginBottom: '20px', justifyContent: 'center' }}>

      <input
        type="text"
        placeholder="Search apartments..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ padding: '8px', width: '250px', borderRadius: '4px' }}
      />

      <select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
        style={{ padding: '8px', borderRadius: '4px' }}
      >
        <option value="All">All Statuses</option>
        {uniqueStatuses.map(status => (
          <option key={status} value={status}>{status}</option>
        ))}
      </select>

    </div>
  )
}

export default ListingFilters;
