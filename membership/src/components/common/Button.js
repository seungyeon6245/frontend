import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const StyledButton = styled.button`
  border: none;
  width: 100%;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem ;
  color: white;
  outline: none;
  cursor: pointer;
background: ${palette.gray[8]};
  &:hover {
    background: ${palette.gray[6]};
  }
`;

const Button = ({to, history, ...rest}) => {
    const onClick = e => {
        if(to) {
            history.push(to);
        }
        if(rest.onClick){
            rest.onClick(e);
        }
    };
    return <StyledButton {...rest} onClick={onClick}/>;
};

export default Button;