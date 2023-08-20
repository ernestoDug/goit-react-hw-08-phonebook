import styled from '@emotion/styled';
// ДІВЧИК 1
export const WpapStyle = styled.div`
  padding: 35px 50px;
`;
// ДІВЧИК 2
export const NavStyle = styled.div`
  display: flex;
  align-items: center;
`;
// ДІВЧИК 3
export const FiltrWrStyle = styled.div`
  display: flex;
  margin-left: auto;
`;

// ЗАГОЛОВОК
export const TitleStyle = styled.h2`
  font-weight: 800;
  color: #444e7b;
  margin: 0;
  text-shadow: 2px 2px 2px #c48e06, 0 2px 2px #eee425, -2px 0 2px #ebe413,
    0 -2px 2px #ead955, 3px 3px 2px #e6db0e, 0 3px 2px #8c1b21,
    -3px 0 2px #dcca30, 0 -3px 2px #8c1b21, 4px 4px 2px #8c1b21,
    0 4px 2px #f6db6d, -4px 0 2px #dcb424, 0 -4px 2px #8c1b21;
`;

export const FormStyle = styled.form``;

export const LabelStyle = styled.label``;

export const InputStyle = styled.input``;

export const ButtonStyle = styled.button`
  display: flex;
  font-size: 18px;
  font-weight: 700;
  align-items: center;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  padding: 10px;
  color: #ce9612;
  text-shadow: 2px 2px 2px #f0f0f0, 0 2px 2px #eee425, -2px 0 2px #ebe413,
    0 -2px 2px #f4f4ee, 3px 3px 2px #e6db0e, 0 3px 2px #8c1b21,
    -3px 0 2px #dcca30, 0 -3px 2px #e7d4d5, 4px 4px 2px #8c1b21,
    0 4px 2px #f6db6d, -4px 0 2px #dcb424, 0 -4px 2px #8c1b21;

  background: radial-gradient(
    circle,
    rgba(233, 179, 38, 1) 27%,
    #5e5331 64%,
    #dcbc6a 100%
  );
  margin-left: 15px;
  box-shadow: 10px 10px 10px 2px rgba(34, 60, 80, 0.2) inset,
    10px 10px 10px 2px rgba(34, 60, 80, 0.2);
  width: 100px;
  border-radius: 80px/80px;
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
    transform: scale(1.1);
  }
`;
