import React from 'react';

export const showLoading = () => (
  <>
    <div className="spinner-grow text-warning" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
    <div className="spinner-grow text-danger" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
    <div className="spinner-grow text-success" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </>

)