import { useState, useEffect } from 'react';
import Loader from '../../components/Loader';
import LoadingError from '../../components/errors/ApiLoadingError';
import Header from '../../components/Header';

import GuestListings from '../../components/guest_space/GuestListings';
import ListingFilters from '../../components/listings/ListingFilters';

function GuestListingsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [listings, setListings] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/guest_space/listings`)
      .then(res => res.json())
      .then(data => {
        setListings(data);
        setIsLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  const uniqueStatuses = [...new Set(listings.map(l => l.status))];

  const filteredListings = listings.filter((listing) => {
    const matchesSearch = listing.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'All' || listing.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <>
      <Header/>
      <div className="loader-wrapper">
        {isLoading ? (
          <Loader/>
        ) : error ? (
          <LoadingError/>
        ) : (
          <>
            <ListingFilters
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              statusFilter={statusFilter}
              setStatusFilter={setStatusFilter}
              uniqueStatuses={uniqueStatuses}
            />

            <GuestListings listings={filteredListings} />
          </>
        )}
      </div>
    </>
  )
}

export default GuestListingsPage;
