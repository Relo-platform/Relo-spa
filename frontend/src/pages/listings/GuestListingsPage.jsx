import { useState, useEffect } from 'react';
import { apiFetch } from '../../utils/apiFetch';
import Loader from '../../components/Loader';
import LoadingError from '../../components/errors/ApiLoadingError';
import Header from '../../components/Header';

import GuestListings from '../../components/guest_space/GuestListings';
import ListingFilters from '../../components/listings/ListingFilters';
import SORT_FUNCTIONS from '../../utils/sortFunctions';

function GuestListingsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [listings, setListings] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    apiFetch(`/listings?page=1`)
      .then(res => res.json())
      .then(data => {
        setListings(data?.extra?.listings || []);
        setIsLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  const uniqueStatuses = [...new Set(listings.map(l => l.status))];

  const search = { value: searchQuery, onChange: setSearchQuery };
  const sort = { value: sortBy, onChange: setSortBy };
  const status = { value: statusFilter, onChange: setStatusFilter, options: uniqueStatuses };

  const filteredListings = listings.filter((listing) => {
    const matchesSearch = listing.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'All' || listing.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const sortFn = SORT_FUNCTIONS[sortBy];
  const sorted = sortFn ? [...filteredListings].sort(sortFn) : filteredListings;

  return (
    <>
      <Header/>
      <div className="loader-wrapper">
        {isLoading ? (
          <Loader/>
        ) : error ? (
          <LoadingError/>
        ) : (
          <section className="filters-wrapper container">
            <ListingFilters search={search} status={status} sort={sort} />

            <GuestListings listings={sorted} />
          </section>
        )}
      </div>
    </>
  )
}

export default GuestListingsPage;
