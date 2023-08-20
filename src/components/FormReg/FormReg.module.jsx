import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

// для фона лебов
export const BodyStyle = styled.section`
  background: #74500c;
  border-radius: 20px/60px;
  border: 2px dashed #ffb841;
  margin-top: 10px;
`;
// форма
export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px/60px;
`;

// лабель
export const LabelStyle = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  margin-top: 9px;
  margin-left: 7px;
  font-weight: 600;
  color: #ebeff6;
  padding-left: 10px;
  font-style: italic;
  border-bottom: none;
  border-radius: 20px/60px;
  margin: 5px;
`;
// інпуть
export const InputStyle = styled.input`
  border-radius: 20px/60px;
  width: 200px;
  padding: 22px 36px;
  color: #262fd4;
  background: linear-gradient(
    90deg,
    #9dbce6 31%,
    rgba(160, 211, 241, 1) 66%,
    rgba(68, 159, 214, 1) 100%
  );
  margin-right: 7px;
  margin-bottom: 7px;

  :placeholder {
    color: #314286;
  }
  &:hover,
  &:focus {
    background: linear-gradient(90deg, #dd90e5 31%, #4ba6da 66%, #2b89c3 100%);
  }
`;

export const LinkForLog = styled(NavLink)`
  margin-top: 8px;
  margin-left: 20px;
  padding: 10px 0;
  color: #abeab5;
  border-radius: 20px/60px;
  background-image: url('https://bogatyr.club/uploads/posts/2023-06/thumbs/1688104499_bogatyr-club-p-kozhanaya-zaplatka-foni-pinterest-15.jpg');
  background-size: 81%;
  background-position: center;
  width: 110px;
  text-align: center;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  letter-spacing: 3px;
  transform: rotate(-7deg);
  border: 4px dashed #ffb841;
  transition: transform 200ms cubic-bezier(0.6, 0, 0.4, 1);

  cursor: pointer;

  :hover,
  :focus {
    border: 4px dashed #e3620c;

    color: #f4f6f3;
    background-image: none;
    background: linear-gradient(
      90deg,
      rgba(60, 119, 204, 1) 31%,
      rgba(68, 159, 214, 1) 60%,
      rgba(0, 168, 255, 1) 100%
    );
    transform: scale(1.1);
  }
  `;

// кнопка
export const ButtonStyle = styled.button`
  display: flex;
  font-size: 20px;
  font-weight: 700;
  align-items: center;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  margin: 15px 5px;
  padding: 10px;
  color: #533505;
  background-image: url('https://img.freepik.com/premium-photo/denim-texture-denim-background-denim-jeans-denim-fabric-denim-surface-blue-jeans-jeans-texture-jeans-background-jeans-fabric-jeans-textile-old-denim-jeans-dark-edged-xa-xa_30824-172.jpg');
  background-size: 97%;
  box-shadow: 10px 10px 10px 2px rgba(34, 60, 80, 0.2) inset,
    10px 10px 10px 2px rgba(34, 60, 80, 0.2);
  border-radius: 20px/60px;
  cursor: pointer;
  border: 4px dashed #ffb841;

  transition: background-color 200ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: color 200ms cubic-bezier(0.6, 0, 0.4, 1);
  transition: border 200ms cubic-bezier(0.6, 0, 0.4, 1);
  transition: transform 200ms cubic-bezier(0.6, 0, 0.4, 1);
  :hover,
  :focus {
    color: #e9e9e0;
    border: 4px dashed #e3620c;
    background-image: none;
    background: linear-gradient(
      90deg,
      rgba(60, 119, 204, 1) 31%,
      rgba(68, 159, 214, 1) 60%,
      rgba(0, 168, 255, 1) 100%
    );
    transform: scale(1.1);
  }
`;
