import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const BodyStyle = styled.section`
  display: flex;
`;
// лого
export const LogoStyle = styled(NavLink)`
  font-size: 66px;
  transition: background 250ms cubic-bezier(0.8, 0, 0.3, 1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
  border-radius: 20px/60px;
  border: 2px dashed #ffb841;
  margin-left: 18px;
  margin-top: 18px;

  :hover,
  :focus {
    background: linear-gradient(
      90deg,
      rgba(60, 119, 204, 1) 31%,
      rgba(68, 159, 214, 1) 60%,
      rgba(0, 168, 255, 1) 100%
    );
    opacity: 0.7;
  }
`;

// навчик
export const NavContStyle = styled.nav`
  display: flex;
  align-items: center;
  margin-top: 30px;
`;
// лінка kon
export const NavLinkStyle = styled(NavLink)`
  display: flex;
  font-size: 16px;
  align-items: center;
  justify-content: center;
  padding: 12px;
  font-weight: 700;
  font-family: 'Oswald';
  text-align: center;
  color: #e9e8e0;
  background: radial-gradient(
    circle,
    rgba(233, 179, 38, 1) 27%,
    #5e5331 64%,
    #dcbc6a 100%
  );
  margin-left: 15px;
  box-shadow: 10px 10px 10px 2px rgba(34, 60, 80, 0.2) inset,
    10px 10px 10px 2px rgba(34, 60, 80, 0.2);
  width: 60px;
  height: 60px;
  border-radius: 50px/50px;
  cursor: pointer;
  transition: background-color 200ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: color 200ms cubic-bezier(0.6, 0, 0.4, 1);
  transition: transform 200ms cubic-bezier(0.6, 0, 0.4, 1);
  :hover,
  :focus {
    text-shadow: none;
    background-image: none;
    background: linear-gradient(90deg, #b6a013 31%, #ecec08 60%, #dfa909 100%);
    transform: scale(1.05);
    color: #533505;
  }
`;
