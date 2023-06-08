import React from "react";
import styled, { css } from "styled-components";

import { NavLink } from "react-router-dom";

const categories = [
  { name: "place", text: "부산명소 서비스" },
  { name: "festival", text: "부산 축제 서비스" },
];


const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  @media scren and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

const Category = styled(NavLink)`
  font-size: 1.2 rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.2rem;

  &.hover {
    color: #495057;
  }

  &.active {
    font-weight: 600;
    border-bottom: 2px solid #cf2225;
    color: #ff0077;
    &:hover {
      color: #7700ff;
    }
  }

  & + & {
    margin-left: 5rem;
  }
`;

const Categories2 = () => {
  return (
    <CategoriesBlock>
      {categories.map((c) => (
        <Category
          key={c.name}
          className={({ isActive }) => (isActive ? "active" : undefined)}
          to={c.name === "place" ? "/" : `/${c.name}`}
        >
          {c.text}
        </Category>
      ))}
    </CategoriesBlock>
  );
};



export default Categories2;