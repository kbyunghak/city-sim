import React from 'react';
import Modal from 'react-modal';

const legendData = [
  {
    name: 'Market',
    positive: 'Economic activation, job growth, increased tax revenue',
    negative: 'Increased traffic congestion, noise pollution',
  },
  {
    name: 'School',
    positive: 'Improved education level, population inflow',
    negative: 'Overcrowded educational facilities, financial burden',
  },
  {
    name: 'Community Centre',
    positive: 'Increased housing satisfaction, cultural revitalization',
    negative: 'Facility maintenance costs',
  },
  {
    name: 'Hospital',
    positive: 'Improved healthcare level, increased public safety',
    negative: 'Increased operating costs, more traffic',
  },
  {
    name: 'Police Station',
    positive: 'Reduced crime rate, increased resident safety perception',
    negative: 'Police shortage concerns, risk of excessive force',
  },
  {
    name: 'Non-Profit Housing',
    positive: 'Improved housing stability, support for low-income groups',
    negative: 'Negative impact on neighborhood image',
  },
  {
    name: 'Goverment funded Daycare',
    positive: 'Increased young families, promotion of female economic activity',
    negative: 'Operating costs and lack of space',
  },
  {
    name: 'Senior Centre',
    positive: 'Improved elderly welfare, community strengthening',
    negative: 'Operating costs, lack of resources',
  },
];

const LegendModal = ({ isOpen, onRequestClose }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    contentLabel="Facility Impact Legend"
    ariaHideApp={false}
    style={{
      overlay: { backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 10000 },
      content: {
        maxWidth: 800,
        margin: 'auto',
        borderRadius: 8,
        padding: 20,
        maxHeight: '80vh',
        overflowY: 'auto',
      }
    }}
  >
    <h3 style={{ marginBottom: 16, fontWeight: '700', fontSize: '1.25rem' }}>
      Facility Impact Legend
    </h3>
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr style={{ borderBottom: '2px solid #555' }}>
          <th style={{ textAlign: 'left', padding: '8px' }}>Facility Name</th>
          <th style={{ textAlign: 'left', padding: '8px' }}>Positive Impact (Benefits)</th>
          <th style={{ textAlign: 'left', padding: '8px' }}>Negative Impact (Drawbacks)</th>
        </tr>
      </thead>
      <tbody>
        {legendData.map((item) => (
          <tr key={item.name} style={{ borderBottom: '1px solid #ddd' }}>
            <td style={{ padding: '8px', fontWeight: '600' }}>{item.name}</td>
            <td style={{ padding: '8px' }}>{item.positive}</td>
            <td style={{ padding: '8px' }}>{item.negative}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <button
      onClick={onRequestClose}
      style={{
        marginTop: 20,
        padding: '10px 20px',
        backgroundColor: '#3f51b5',
        color: 'white',
        border: 'none',
        borderRadius: 6,
        fontWeight: 'bold',
        cursor: 'pointer',
        float: 'right',
      }}
    >
      Close
    </button>
  </Modal>
);

export default LegendModal;