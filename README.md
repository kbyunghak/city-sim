
# Burnaby City Development Simulation

![Burnaby City](./screenshots/burnaby-map.png)

A React-based interactive city development simulation for Burnaby, BC, showcasing the impact of different facilities on urban indicators from 2025 to 2050.

---

## Overview

This project simulates the growth and development of Burnaby city by allowing users to place various facilities on a map within the city boundaries. The simulation models how these facilities influence key urban indicators such as population, traffic accidents, crime rates, housing satisfaction, unemployment, air quality, and inflation over a 25-year horizon.

Users can:

- Select and place buildings like Markets, Schools, Hospitals, and more on a detailed Burnaby map.
- View baseline data (2025), forecasted trends (2050 projected), and user-driven scenarios (2050 user scenario).
- Analyze a summary of overall policy impacts and detailed facility-level effects.
- Access a legend explaining the positive and negative impacts of each facility.
- Visualize placed buildings on the map with distinct icons and adjust the view.
- Simulate and review results to inform urban planning and policy decisions.

---

## Features

- **Interactive Map:** Leaflet.js-powered map with polygon boundaries for Burnaby.
- **Facility Selection:** Users can select from a set of buildings with associated costs and impacts.
- **Budget Management:** Place buildings within a budget constraint.
- **Dynamic Simulation:** Calculates changes in urban indicators based on placed facilities.
- **Detailed Reports:** Tabular summaries showing indicator comparisons and facility impact details.
- **Policy Summaries:** Automatically generated overall and facility-specific policy suggestion summaries.
- **Legend:** Clarifies benefits and drawbacks for each facility type.
- **Responsive UI:** Modern, clean interface with easy navigation.

---

## Technologies Used

- React.js (Functional Components & Hooks)
- React Leaflet (Map rendering and interaction)
- Leaflet.js (Map library)
- CSS Flexbox & Grid for layout
- JavaScript ES6+
- Modal dialogs for simulation results and legends

---

## Getting Started

### Prerequisites

- Node.js (v16 or newer recommended)
- npm or yarn

### Installation

```bash
git clone https://github.com/yourusername/burnaby-city-simulation.git
cd burnaby-city-simulation
npm install
```

### Running the App Locally

```bash
npm start
```

Open your browser at `http://localhost:3000` to view the simulation.

---

## Project Structure

- `src/`
  - `components/` - React components for Map, Simulation Modal, Legend, etc.
  - `constants/` - Data files including polygon coordinates, facility impact data, baseline, and forecast data.
  - `utils/` - Helper functions for summaries and calculations.
  - `App.js` - Main application component managing state and layout.

---

## Usage

1. Select a building type from the right panel.
2. Click on the map inside Burnaby boundaries to place buildings.
3. Monitor budget usage as you add buildings.
4. Click **Simulate** when budget is fully used to generate and view simulation results.
5. Review the summary and detailed reports.
6. Use the **Show Legend** button to understand facility impacts.

---

## Screenshots

### Simulation Overview  
![Simulation Screenshot](./screenshots/simulation-overview.png)

### Policy Summary and Facility Impact Details  
![Policy Summary Screenshot](./screenshots/policy-summary.png)

### Facility Impact Legend  
![Legend Screenshot](./screenshots/legend.png)

---

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for review.

---

## License

This project is licensed under the MIT License.

---

## Acknowledgements

- Leaflet and React-Leaflet teams for map libraries.
- OpenStreetMap contributors for map tiles.
- Urban development policy frameworks inspiring simulation logic.

---

## Contact

For questions or feedback, please contact [your-email@example.com].

