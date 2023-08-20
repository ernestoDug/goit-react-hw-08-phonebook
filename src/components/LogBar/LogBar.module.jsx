import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

// список
export const LogBarListStyle = styled.ul`
  display: flex;
  gap: 8px;

  margin-left: auto;
`;
// лішки
export const ItemStyle = styled.li``;

export const LinkForLogStyle = styled(NavLink)`
  display: flex;
  font-size: 16px;
  font-weight: 700;
  align-items: center;
  margin: 15px 5px;
  color: #f7e32d;
  padding: 9px;
  background-color: #6b4d15;

  box-shadow: 10px 10px 10px 2px rgba(34, 60, 80, 0.2) inset,
    10px 10px 10px 2px rgba(34, 60, 80, 0.2);
  border: 1px solid rgba(250, 187, 24, 0.1);
  border-radius: 20px/60px;
  cursor: pointer;
  border: 2px dashed #ffb841;

  transition: background-color 200ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: color 200ms cubic-bezier(0.6, 0, 0.4, 1);
  transition: border 200ms cubic-bezier(0.6, 0, 0.4, 1);
  transition: transform 200ms cubic-bezier(0.6, 0, 0.4, 1);

  :hover,
  :focus {
    color: #a2e2f3;
    border: 2px dashed #e3620c;
    transform: scale(1.1);
    background-image: none;
    background-color: green;
  }
`;
