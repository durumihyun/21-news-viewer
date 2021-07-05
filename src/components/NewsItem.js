import React from 'react';
import styled from 'styled-components';

const Block = styled.div`
  /* display: flex; */
  background-color: white;
  margin: 0 20px;
  border-bottom: 1px dotted gray;
  width: 90%;
  .img {
    margin-right: 1rem;
    img {
      display: block;
      width: 200px;
      height: 100px;
      object-fit: cover;
    }
  }
  .des {
    margin: 0;
    line-height: 1.5;
    margin-top: 0.5rem;
    white-space: normal;
    color: darkslategrey;
    font-weight: bolder;
  }
  & + & {
    margin-top: 3px;
  }
`;
const NewsItem = ({ article }) => {
  const { title, urlToImage } = article;
  return (
    <Block>
      <div className="img">
        <img src={urlToImage} alt="img" />
      </div>
      <div className="des"> {title}</div>
    </Block>
  );
};

export default NewsItem;
