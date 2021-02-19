import styled from 'styled-components';
import { TabList } from 'react-tabs';

export const Logo = styled.img`
  margin-top: -40px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .react-tabs {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const StyledTabList = styled(TabList)`
  width: 500px;
  border: 0;
  display: flex;
  margin: 0 auto;
  margin-bottom: 100px;
  align-items: center;
  justify-content: space-around;
  font-size: 24px;
  color: #999591;
  border: 2px solid #c74f2f;
  border-radius: 30px;

  .react-tabs__tab--selected {
    background: none;
    border: 0;
    color: #c74f2f;
  }
`;
