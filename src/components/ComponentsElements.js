import styled from 'styled-components';

export const Button = styled.button`
  border-radius: 4px;
  background: #ff3b3f;
  white-space: nowrap;
  padding: ${({big}) => (big ? '12px 64px' : '10px 20px')};
  color: #fff;
  font-size: ${({ fontBig}) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  width: 100%;

  &:hover {
    transition: all .3s ease-out;
    background: #ff3b3fc0;
  }

`;

export const FormInput = styled.input`
  height: 40px;
  width: 100%;
  padding: 10px 20px;
  border-radius: 2px;
  outline: none;
  border: none;
  font-size: 16px;
  border: 1px solid #fff;

  &::placeholder {
    color: #242424;
  }
`;