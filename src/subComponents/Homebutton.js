// Home button

import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Home } from "../components/AllSvgs";

const Homebtn = styled.button`
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translate(-50%, 0);

  background-color: ${(props) => props.theme.body2};
  padding: 1rem;
  border-radius: 50%;
  border: 2px solid #000;
  width: 2.5rem;
  height: 2.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;

  cursor: pointer;

  &:hover {
    background-color: rgba(145, 27, 46);
    box-shadow: 0 0 8px 6px rgba(145, 27, 46);
  }

  & > *:first-child {
    text-decoration: none;
    color: inherit;
  }

  @media only screen and (max-width: 50em) {
    width: 2rem;
    height: 2rem;
  }
`;

const Homebutton = () => {
  return (
    <Homebtn>
      <NavLink to="/">
        <Home width={30} height={30} fill="currentcolor" />
      </NavLink>
    </Homebtn>
  );
};

export default Homebutton;
