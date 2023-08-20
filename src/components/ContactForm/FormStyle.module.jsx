import styled from '@emotion/styled';

// форма
export const BodyStyle = styled.section`
  background: #74500c;
  border-radius: 20px/60px;
  border: 2px dashed #ffb841;
`;
// форма
export const FormStyle = styled.form`
  display: flex;
  background-image: url('https://img.freepik.com/free-vector/jeans-texture-background_1053-120.jpg?w=740&t=st=1692460341~exp=1692460941~hmac=8328fc0d4ee8de30fcace9f0f45c61ac624d184733abdaa77901038d0c682448');
  border-radius: 20px/60px;
  box-shadow: 10px 10px 10px 2px rgba(34, 60, 80, 0.2) inset,
    10px 10px 10px 2px rgba(34, 60, 80, 0.2);
  width: 800px;
  justify-content: space-around;
  padding: 12px 7px;
`;

// лабель
export const LabelStyled = styled.label`
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
