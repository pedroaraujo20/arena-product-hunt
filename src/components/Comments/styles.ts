import styled from 'styled-components';

export const Container = styled.article`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  padding: 30px;
`;

export const PostComment = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  border-radius: 10px;
  margin-bottom: 15px;
  background: rgba(137, 142, 136, 0.5);
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    margin-right: 15px;
  }

  span {
    font-weight: 500;
    font-size: 18px;
  }
`;

export const Body = styled.span`
  margin-top: 20px;
  font-weight: 400;
  font-size: 17px;
`;
