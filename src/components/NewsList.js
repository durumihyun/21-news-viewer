import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 668px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 668px) {
    border: 1px solid tomato;
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;
const NewsList = ({ subject }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const address =
    subject === 'all'
      ? `https://newsapi.org/v2/top-headlines?country=kr&apiKey=ae3a8e556b87481dad50dd0a69baaec4`
      : `https://newsapi.org/v2/top-headlines?country=kr&category=${subject}&apiKey=ae3a8e556b87481dad50dd0a69baaec4`;
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const result = await axios.get(address);
        setData(result.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [address]);

  if (loading) {
    return <NewsListBlock>로딩중 😎</NewsListBlock>;
  }

  return (
    <NewsListBlock>
      {data &&
        data.map((article) => <NewsItem key={article.url} article={article} />)}
    </NewsListBlock>
  );
};

export default NewsList;
