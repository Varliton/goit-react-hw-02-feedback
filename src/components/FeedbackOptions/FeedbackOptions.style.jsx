import styled from 'styled-components';
export const FeedbackList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;
export const Button = styled.button`
  padding: 8px;
`;
export const FeedbackListItem = styled.li`
  margin-left: 10px;
  :not(:last-child) {
    margin-right: 10px;
  }
`;
