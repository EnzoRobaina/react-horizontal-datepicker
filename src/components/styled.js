import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  background: inherit;
`;

export const ButtonWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: inherit;
`;

export const Button = styled.button`
  border: none;
  text-decoration: none;
  cursor: pointer;
  border-radius: 0.25rem;
  width: 25px;
  height: 100%;
  color: white;
  font-size: 20px;
  font-weight: bold;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  transition: all linear 0.1s;

  &:before {
    z-index: 100;
    position: absolute;
    width: 25px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 0;
    content: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='rgba%28255,255,255,.85%29' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 14l6-6-6-6'/%3e%3c/svg%3e");
  }

  &:focus {
    box-shadow: 0 0 0 0.25rem rgb(0 0 0 / 50%);
  }

  &.left {
    &:before {
      transform: rotate(180deg);
    }
  }
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
  margin: 0.5rem;
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
  margin: 2px 1rem 2px 1rem;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    -webkit-appearance: none;
    display: none;
  }
`;
