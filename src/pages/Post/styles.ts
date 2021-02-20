import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 100px 50px;
`;

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #3e3b47;
  padding: 40px;
  border-radius: 10px;
  max-width: 700px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
`;

export const Media = styled.img`
  width: 400px;
  border-radius: 20px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  margin: 40px 0;
`;

export const CompanyHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 30px;

  div {
    display: flex;
    align-items: center;

    span {
      font-size: 26px;
      font-weight: 500;
    }
  }
`;

export const Thumbnail = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 10px;
  margin-right: 15px;
  border: 1px solid #fff;
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 20px;
  color: #fff;
  opacity: 0.6;
  line-height: 30px;
  text-align: left;
`;

export const Votes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  strong {
    font-weight: bold;
    color: #c74f2f;
  }
`;
