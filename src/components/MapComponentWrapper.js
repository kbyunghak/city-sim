import React from 'react';
import MapComponent from './MapComponent';

const MapComponentWrapper = (props) => {
  return (
    <div
      style={{
        backgroundColor: '#fff',
        borderRadius: '12px',
        boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        maxHeight: 'calc(100vh - 100px)',
        marginBottom: '24px',
      }}
    >
      <h2
        style={{
          margin: '0 0 16px 0',
          fontWeight: '700',
          color: '#222',
          fontSize: '1.5rem',
          userSelect: 'none',
        }}
      >
        Burnaby City Development Simulation     
      </h2>
      <div style={{ flexGrow: 1, minHeight: 0 }}>
        <MapComponent {...props} />
      </div>
    </div>
  );
};

export default MapComponentWrapper;
