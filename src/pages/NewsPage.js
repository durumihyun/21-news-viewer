import React from 'react';
import NewsList from '../components/NewsList';
import Category from '../components/Category';

const NewsPage = ({ match }) => {
  console.log(match);
  const subject = match.params.subject || 'all';
  return (
    <div>
      <Category subject={subject} />
      <NewsList subject={subject} />
    </div>
  );
};

export default NewsPage;
