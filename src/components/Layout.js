import React from 'react';

export default function Layout({ children }) {
  return (
    <>
      <div className="h-screen">
        {children}
      </div>
    </>
  );
}
