import styled from '@emotion/styled';

export const AvDivStyle = styled.div`
  display: flex;
  padding-right: 15px;
  padding-top: 5px;
  margin-right: 18px;
  border: 2px dashed #ffb841;
  border-right: 4px dashed #ffb841;
  border-radius: 20px/60px;
`;
export const NavStyle = styled.div`
  display: flex;
  margin-left: auto;
  padding-right: 18px;
  padding-bottom: 10px;
`;

// ім'я
export const NameStyle = styled.p`
  font-weight: 800;
  font-size: 30px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  margin-right: 18px;
  letter-spacing: 5px;
  margin-top: 18px;
  text-shadow: 2px 2px 2px #c48e06, 0 2px 2px #134eb6, -2px 0 2px #8c1b21,
    0 -2px 2px #2f39e7, 3px 3px 2px #8c1b21, 0 3px 2px #8c1b21,
    0 4px 2px #8c1b21, -4px 0 2px #102f81, 0 -4px 2px #2d16af;
  text-align: center;
  color: #cf8b16;
`;
// пошта
export const EmailStyle = styled.p`
  font-weight: 600;
  font-size: 14px;
  color: #eeeff5;
  text-shadow: 2px 2px 2px #c48e06, 0 2px 2px #134eb6, -2px 0 2px #8c1b21,
    0 4px 2px #8c1b21, -4px 0 2px #102f81, 0 -4px 2px #2d16af;
  margin-left: 15px;
  letter-spacing: 2px;

`;

// для авочки
export const AvStyle = styled.div`
  width: 50px;
  height: 50px;
  background: radial-gradient(
    circle,
    rgba(233, 179, 38, 1) 27%,
    #5e5331 64%,
    #dcbc6a 100%
  );
  border-radius: 24px;
  border: 1px solid white;
  margin-top: 7px;
`;

export const BtnStyle = styled.button`
  display: flex;
  font-size: 18px;
  font-weight: 700;
  align-items: center;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  padding: 10px;
  color: #e9e8e0;
  text-shadow: 2px 2px 2px #c48e06, 0 2px 2px #d7cd0d, -2px 0 2px #ebe413;

  font-family: 'Oswald';

  background: radial-gradient(
    circle,
    rgba(233, 179, 38, 1) 27%,
    #5e5331 64%,
    #dcbc6a 100%
  );
  box-shadow: 10px 10px 10px 2px rgba(34, 60, 80, 0.2) inset,
    10px 10px 10px 2px rgba(34, 60, 80, 0.2);
  width: 80px;
  border-radius: 100px/100px;
  cursor: pointer;

  transition: background-color 200ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: color 200ms cubic-bezier(0.6, 0, 0.4, 1);
  transition: transform 200ms cubic-bezier(0.6, 0, 0.4, 1);
  :hover,
  :focus {
    text-shadow: none;
    color: #533505;
    background-image: none;
    background: linear-gradient(90deg, #b6a013 31%, #ecec08 60%, #dfa909 100%);
    transform: scale(1.05);
  }
`;
