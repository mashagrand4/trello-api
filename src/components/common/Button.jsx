import styled from 'styled-components';
import React from 'react';
import PropTypes from "prop-types";

const Button = ({ name, onClickHandler }) => {
  return <ButtonField onClick={onClickHandler}>{name}</ButtonField>;
};

Button.propTypes = {
  name: PropTypes.string,
  onClickHandler: PropTypes.func,
};

Button.defaultProps = {
  name: '',
  onClickHandler: {},
};

const ButtonField = styled.button`
  display: inline-block;
  padding: 0.7rem;
  border: 0;
`;

export default Button;
