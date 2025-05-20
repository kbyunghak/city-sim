// src/components/ImpactLegendModal.js
import React from 'react';
import Modal from 'react-modal';

const legendData = [
  {
    facility: 'Market',
    positive: 'Economic growth, job increase, tax revenue rise',
    negative: 'Traffic congestion increase, noise issues',
  },
  {
    facility: 'School',
    positive: 'Improved education level, population influx',
    negative: 'Overcrowded school facilities, budget strain',
  },
  {
    facility: 'CommunityCentre',
    positive: 'Increased housing satisfaction, cultural activation',
    negative: 'Facility maintenance cost burden',
  },
  {
    facility: 'Hospital',
    positive: 'Improved healthcare, public safety increase',
    negative: 'Higher operating costs, more traffic',
  },
  {
    facility: 'PoliceStation',
    positive: 'Crime reduction, increased resident safety',
    negative: 'Potential police understaffing, concerns over strict enforcement',
  },
  {
    facility: 'NonProfitHousing',
    positive: 'Housing stability, support for low-income groups',
    negative: 'Concerns about local image',
  },
  {
    facility: 'Daycare',
    positive: 'Young family population growth, increased women economic activity',
    negative: 'Operating cost and space shortage',
  },
  {
    facility: 'SeniorCentre',
    positive: 'Improved elderly welfare, community strengthening',
    negative: 'Operating cost and resource shortage',
  },
  {
    facility: 'Park/Green Space',
    positive: 'Better air quality, increased housing satisfaction',
    negative: 'Maintenance cost',
  },
  {
    facility: 'Public Transit',
    positive: 'Reduced traffic congestion, less environmental pollution',
    negative: 'Initial investment and maintenance costs',
  },
  {
    facility: 'Fire Station',
    positive: 'Improved public safety, enhanced disaster response',
    negative: 'Increased operating costs',
  },
  {
    facility: 'Cultural Center',
    positive: 'Cultural activation, tourism and local economy promotion',
    negative: 'Budget burden',
  },
];

const ImpactLegendModal = ({ isOpen, onRequestClose }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    contentLabel="Facility Impact Legend"
    ariaHideApp={false}
    style={{
        overlay: {
            zIndex: 10000, 
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
      content: {
        maxWidth: '700px',
        margin: 'auto',
        height: 'auto',
        maxHeight: '80vh',
        overflowY: 'auto',
        borderRadius: '10px',
        padding: '20px',
      },
    }}
  >
    <h2>Facility Impact Info</h2>
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th style={{ borderBottom: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Facility</th>
          <th style={{ borderBottom: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Positive Effects</th>
          <th style={{ borderBottom: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Negative Effects</th>
        </tr>
      </thead>
      <tbody>
        {legendData.map(({ facility, positive, negative }) => (
          <tr key={facility}>
            <td style={{ borderBottom: '1px solid #eee', padding: '8px' }}>{facility}</td>
            <td style={{ borderBottom: '1px solid #eee', padding: '8px' }}>{positive}</td>
            <td style={{ borderBottom: '1px solid #eee', padding: '8px' }}>{negative}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <button
      onClick={onRequestClose}
      style={{
        marginTop: '20px',
        padding: '10px 20px',
        backgroundColor: '#3f51b5',
        color: 'white',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        float: 'right',
      }}
    >
      Close
    </button>
  </Modal>
);

export default ImpactLegendModal;
