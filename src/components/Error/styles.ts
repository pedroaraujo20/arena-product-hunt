import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 350px;
  background: #3e3b47;
  border-radius: 10px;
  padding: 40px;

  svg {
    width: 56px;
    height: 56px;
    color: #c74f2f;
    margin-bottom: 30px;
  }

  span {
    font-weight: 500;
    font-size: 20px;
    color: #fff;
    text-align: center;
  }
`;
