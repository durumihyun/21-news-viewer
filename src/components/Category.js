import React from 'react';
import styled, { css } from 'styled-components';

const CategorySpan = styled.span`
  color: skyblue;
  margin: 5px;
  cursor: pointer;
  font-size: 0.6rem;

  &:hover {
    background-color: burlywood;
  }

  ${(props) =>
    props.active &&
    css`
      font-weight: 800;
      border-bottom: 2px solid tomato;
      color: grey;
    `}
`;
const categories = [
  { id: 1, theme: 'all' },
  { id: 2, theme: 'business' },
  { id: 3, theme: 'health' },
  { id: 4, theme: 'sports' },
  { id: 5, theme: 'science' },
  { id: 6, theme: 'technology' },
];
const Category = ({ onClick, subject }) => {
  return (
    <div>
      {categories.map((el) => (
        <CategorySpan
          active={subject === el.theme}
          key={el.id}
          onClick={() => onClick(el.theme)}
        >
          {el.theme}
        </CategorySpan>
      ))}
    </div>
  );
};

export default Category;
