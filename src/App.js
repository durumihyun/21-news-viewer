import React from 'react';
import NewsPage from './pages/NewsPage';
import { Route } from 'react-router';
const App = () => {
  return <Route path="/:subject?" component={NewsPage} />;
};

export default App;
