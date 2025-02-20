// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Inventory from './pages/Inventory';
import Sales from './pages/Sales';
import Orders from './pages/Orders';
import Settings from './pages/Settings';
import MenuManagement from './pages/MenuManagement';
import FoodOrdering from './pages/FoodOrdering';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/MenuManagement" element={<MenuManagement />} />
        <Route path="/FoodOrdering" element={<FoodOrdering />} />
        
      </Routes>
    </Router>
  );
};

export default App;
