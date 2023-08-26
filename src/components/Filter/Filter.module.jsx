import styled from '@emotion/styled';

export const BodyStyle = styled.section`
  background: #74500c;
  border-radius: 20px/60px;
  border: 2px dashed #ffb841;
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
  border: 2px dashed #ffb841;
  border-radius: 20px/60px;
  margin-bottom: 7px;
  margin-right: 7px;
`;

export const InputStyle = styled.input`
  border-radius: 20px/60px;
  width: 250px;
  padding: 22px 36px;
  color: #262fd4;
  background: linear-gradient(
    90deg,
    #9dbce6 31%,
    rgba(160, 211, 241, 1) 66%,
    rgba(68, 159, 214, 1) 100%
  );
  margin: 5px;
  margin-right: 15px;
  border-style: none;

  :placeholder {
    color: #314286;
  }
  &:hover,
  &:focus {
    background: linear-gradient(90deg, #dd90e5 31%, #4ba6da 66%, #2b89c3 100%);
  }
`;
