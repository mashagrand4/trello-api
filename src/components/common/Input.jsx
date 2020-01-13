import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";

const Input = ({ placeholder, onChangeHandler }) => {
  return <InputField placeholder={placeholder} onChange={onChangeHandler} />;
};

Input.propTypes = {
  placeholder: PropTypes.string,
  onChangeHandler: PropTypes.func,
};

Input.defaultProps = {
  placeholder: '',
  onChangeHandler: {},
};

const InputField = styled.input`
  padding: 0.7rem;
  width: 50%;
  border: 0;
  border-right: 1px solid #c1c1c1;
`;

export default Input;
