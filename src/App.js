import React, { useCallback, useState } from 'react';
import NewsList from './components/NewsList';
import Category from './components/Category';
const App = () => {
  const [subject, setSubject] = useState('all');
  const handleClick = useCallback((category) => {
    setSubject(category);
  }, []);
  return (
    <div>
      <Category subject={subject} onClick={handleClick} />
      <NewsList subject={subject} />
    </div>
  );
};

export default App;
