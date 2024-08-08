import React from 'react';
import { useLocation } from 'react-router-dom';

export const Results = () => {
  const location = useLocation();
  const { results } = location.state || {};

  return (
    <div className="container mt-4">
      <div className="py-5"></div>
      <div className="py-3"></div>
      <div className="text-green">
        <h1>Results</h1>
      </div>
      {results ? (
        <div>
          <pre>{JSON.stringify(results, null, 2)}</pre>
        </div>
      ) : (
        <div>No results available</div>
      )}
    </div>
  );
};
