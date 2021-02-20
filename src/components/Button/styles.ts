import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #c7472f;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #fff;
  font-size: 20px;
  width: 100%;
  text-decoration: none;
  font-weight: 500;
  margin-top: 16px;
  transition: 0.2s;

  &:hover {
    background: ${shade(0.2, '#C74F2F')};
  }
`;
