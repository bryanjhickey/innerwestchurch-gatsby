import React from 'react';

export default function InfoBanner() {
  return (
    <>
      {/* Mini Banner Info */}
      <div className="text-center py-6">
        <h3 className="text-primary font-medium text-base lg:text-lg">Get to know us at our Sunday Gatherings</h3>
        <p className="text-xs mt-2 lg:text-sm">4:00pm – 26 Norwood Street Flemington (St. Stephen’s Presbyterian)</p>
        <p className="text-xs mt-2 lg:text-sm">
          Follow us on
          {' '}
          <a href="http://www.facebook.com/innerwestchurch" target="_blank" rel="noreferrer">Facebook</a>
          {' '}
          for further updates on our gatherings.
        </p>
      </div>
    </>
  );
}
