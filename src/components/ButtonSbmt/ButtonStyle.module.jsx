import styled from '@emotion/styled';

// кнопка
export const ButtonStyle = styled.button`
  display: flex;
  font-size: 16px;
  font-weight: 700;
  align-items: center;
  margin: 15px 5px;
  color: #f7e32d;
  padding: 9px;
  background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXq-y8Yv0QvBh-kGT1LOtxiOxN1FRnb4-3gA&usqp=CAU');
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
