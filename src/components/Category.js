import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const CategoryBlock = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;
const CategorySpan = styled.span`
  &:hover {
    background-color: beige;
  }

  ${(props) =>
    props.active &&
    css`
      font-weight: 800;
      border-bottom: 2px solid tomato;
      border-top: 2px solid tomato;
    `}
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: skyblue;
  margin: 5px;
  cursor: pointer;
  font-size: 0.9rem;
`;
const categories = [
  { id: 1, theme: 'all' },
  { id: 2, theme: 'business' },
  { id: 3, theme: 'health' },
  { id: 4, theme: 'sports' },
  { id: 5, theme: 'science' },
  { id: 6, theme: 'technology' },
];
const Category = ({ subject }) => {
  return (
    <CategoryBlock>
      {categories.map((el) => (
        <CategorySpan active={subject === el.theme} key={el.id}>
          <StyledLink to={el.theme}> {el.theme}</StyledLink>
        </CategorySpan>
      ))}
    </CategoryBlock>
  );
};

export default Category;
