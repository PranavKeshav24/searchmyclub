import React from 'react';
import GetExporeLogic from '../../Logic/Explore/getEvents';
import EventCarousel from '../../components/EventCarousel';
import Loading from '../../components/Loading';
import { categories } from '../../Logic/EventsLogic/categories';

function Explore() {
  const {
    events,
    offlineEvent,
    onlineEvent,
    loading,
    error,
    setSearchParams,
    category,
  } = GetExporeLogic();

  if (loading) return <Loading />;

  return (
    <section className="container h-screen py-4 md:py-36">
      <h1 className="pb-12 text-5xl font-bold text-center">
        Explore the best events happening around you
      </h1>
      <div className="flex gap-4 mb-8 items-center overflow-auto text-neutral-500 justify-between rounded-full border border-gray-300 px-4">
        {[{ label: 'All' }, ...categories]?.map((item, index) => (
          <button
            key={index} // Added key for each button
            onClick={e => {
              e.preventDefault();
              if (item?.label === 'All') {
                // Set category to empty when 'All' is clicked
                setSearchParams(prev => ({ ...prev, category: '' })); // Change to '' for clarity
              } else {
                setSearchParams(prev => ({ ...prev, category: item?.label }));
              }
            }}
            className={`text-md ${
              category === item.label ||
              (category === '' && item.label === 'All')
                ? 'text-white bg-indigo-700 font-semibold px-4 py-2 rounded-full'
                : 'hover:bg-gray-200' // Optional hover effect for other buttons
            }`}
          >
            {item?.label}
          </button>
        ))}
      </div>
      {error ? (
        <div>{error}</div>
      ) : (
        <>
          {events?.length > 0 ? (
            <EventCarousel events={events} title={'All'} />
          ) : (
            <div>No events found</div>
          )}
          {offlineEvent?.length > 0 && (
            <EventCarousel events={offlineEvent} title={'Offline'} />
          )}
          {onlineEvent?.length > 0 && (
            <EventCarousel events={onlineEvent} title={'Online'} />
          )}
        </>
      )}
    </section>
  );
}

export default Explore;
