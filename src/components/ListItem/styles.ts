import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled(Link)`
  display: flex;
  align-items: center;
  border-radius: 10px;
  text-decoration: none;
  background: #3e3b47;
  padding: 15px;
  width: 100%;
  height: 135px;
  max-width: 600px;
  transition: transform 0.5s;
  border-bottom: 2px solid #c74f2f;
  cursor: pointer;

  & + a {
    margin-top: 30px;
  }

  img {
    width: 56px;
    height: 56px;
    border-radius: 10px;
    margin-right: 15px;
  }

  &:hover {
    opacity: 0.8;
    transform: translateX(50px);
  }
`;

export const TextCombination = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    color: #fff;
    font-size: 20px;
    font-weight: 700;
  }

  span {
    font-size: 15px;
    color: #999591;
    text-align: left;
    overflow: hidden;
  }
`;

export const Votes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 10px;

  svg {
    width: 20px;
    height: 20px;
    color: #c74f2f;
  }

  span {
    font-weight: bold;
    color: #c74f2f;
  }
`;
