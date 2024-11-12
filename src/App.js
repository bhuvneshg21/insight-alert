import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import InsightAlertDashboard from './InsightAlertDashboard';
import HomePage from './HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/insight-alert/:customerId" element={<InsightAlertDashboardWrapper />} />
      </Routes>
    </Router>
  );
}

// Wrapper to fetch the customerId from route params
const InsightAlertDashboardWrapper = () => {
  const { customerId } = useParams();
  return <InsightAlertDashboard selectedCustomerId={Number(customerId)} />;
};

export default App;
