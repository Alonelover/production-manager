import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import ProductionManagement from './pages/ProductionManagement';
import BatchingPlan from './components/BatchingPlan';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/production" element={<ProductionManagement />} />
        <Route path="/batching" element={<BatchingPlan />} />
        <Route path="/" element={<Navigate to="/production" replace />} />
      </Routes>
    </Layout>
  );
};

export default App;