import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  background: inherit;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  background: inherit;
`;

export const Button = styled.button`
  border: none;
  text-decoration: none;
  cursor: pointer;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  color: white;
  font-size: 20px;
  font-weight: bold;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin-bottom: 13px;
`;

export const MarkedLabel = styled.div`
  margin-top: 10px;
`;

export const DateDayItemMarked = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  margin: 0 0 0 5px;
  width: 45px;
  height: 70px;
  flex-shrink: 0;
`;

export const DateDayItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  margin: 0 0 0 5px;
  width: 45px;
  height: 49px;
  flex-shrink: 0;
`;

export const DayLabel = styled.div`
  font-size: 12px;
  margin: 4px 0 0 0;
`;

export const DateLabel = styled.div`
  font-size: 18px;
`;

export const MonthContainer = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  padding: 2px;
  margin: 2px;
`;

export const MonthYearLabel = styled.span`
  align-self: flex-start;
  z-index: 3;
  font-size: 15px;
  font-weight: bold;
  position: sticky;
  top: 10px;
  left: 0;
  width: max-content;
  margin: 0 10px;
`;

export const DaysContainer = styled.div`
  display: flex;
  z-index: 1;
  margin-top: 10px;
`;

export const DateListScrollable = styled.div`
  display: flex;
  overflow-x: scroll;
  scrollbar-width: none;
  margin: 2px 0 2px -40px;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    -webkit-appearance: none;
    display: none;
  }
`;
