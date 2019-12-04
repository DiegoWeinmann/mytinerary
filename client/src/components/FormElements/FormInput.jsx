import React from 'react';
import styled from 'styled-components';

const InputGroup = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
    font-weight: bold;
  }

  input {
    width: 100%;
    margin-bottom: 0.5rem;
    border: none;
    border-bottom: 2px dotted #333;
    border-radius: 4px;

    &:focus {
      outline: none;
      background: rgba(3, 3, 3, 0.1);
    }
  }
`;

const FormInput = props => {
  return (
    <InputGroup>
      <label>{props.label}</label>
      <input
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        name={props.name}
      />
    </InputGroup>
  );
};

export default FormInput;
