/* import React, { useState } from "react";
import styled from "styled-components";
import { DarkTheme } from "../components/Themes";
import { mediaQueries } from "../components/Themes";

const Box = styled("div")`
  display: inline-block;
  color: ${(props) =>
    props.color === "dark" ? DarkTheme.body : DarkTheme.text};
  position: fixed;
  left: 83%;

  ${mediaQueries(40)`
display: none;

`};
`;

const DropDownContainer = styled("div")`
  width: 8em;
  margin: 0 auto;
`;

const DropDownHeader = styled("div")`
  padding: 0.4em 2em 0.4em 1em;
  font-weight: 500;
  font-size: 1.3rem;
  background: #ffffff;
  text-align: center;
`;

const DropDownListContainer = styled("div")``;

const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
`;

const LogoComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);
  const [selectedOption, setSelectedOption] = useState(null);
  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };
  const options = ["Mangoes", "Apples", "Oranges"];

  return (
    <Box color={props.theme}>
      <DropDownContainer>
        <DropDownHeader onClick={toggling}>
          {selectedOption || "Mangoes"}
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              {options.map((option) => (
                <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                  {option}
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
    </Box>
  );
};

export default LogoComponent;
 */
