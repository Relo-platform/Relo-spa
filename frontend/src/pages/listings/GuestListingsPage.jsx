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
  const [savedListingIds, setSavedListingIds] = useState(new Set());

  useEffect(() => {
    Promise.all([
      apiFetch('/listings?page=1').then(res => res.json()),
      apiFetch('/saved_listings').then(res => res.json())
    ])
    .then(([listingsData, savedData]) => {
      setListings(listingsData?.extra?.listings || []);
      setSavedListingIds(new Set(savedData?.extra?.listings?.map(s => s.id)));
      setIsLoading(false);
    })
    .catch(err => {
      setError(err.message);
      setIsLoading(false);
    });
  }, []);

  const addToSaved = (id) => {
    setSavedListingIds(prev => new Set([...prev, id]));
  };

  const removeFromSaved = (id) => {
    setSavedListingIds(prev => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
  };

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

            <GuestListings
              listings={sorted}
              savedListingIds={savedListingIds}
              addToSaved={addToSaved}
              removeFromSaved={removeFromSaved}
            />
          </section>
        )}
      </div>
    </>
  )
}

export default GuestListingsPage;
