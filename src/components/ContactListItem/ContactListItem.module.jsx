import styled from '@emotion/styled';

export const ContactItemStyle = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;

  padding: 20px 20px;

  border-radius: 24px;
  border: 1px solid rgba(0, 0, 0, 0.04);

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);
`;

export const ContactNameStyle = styled.p`
  display: flex;
  align-items: center;
  color: #f4e8ac;
  font-size: 16px;
  background-color: #c38e2a;
  border: 2px dashed #ffb841;
  margin: 0;
  font-weight: 500;
  border-radius: 20px/60px;
  padding: 7px;
`;

export const ContactNumberStyle = styled.p`
  display: flex;
  align-items: center;
  color: #665813;
  font-size: 14px;
  background-color: #e2b96d;
  border: 2px dashed #ffb841;
  margin: 0;
  font-weight: 500;
  border-radius: 20px/60px;
  padding: 7px;
`;

export const ButtonStyle = styled.button`
  display: flex;
  font-size: 16px;
  font-weight: 500;
  align-items: center;
  margin: 15px 5px;
  color: #f7e32d;
  padding: 5px;
  background-color: #74500c;

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
    background-color: #e11212;
  }
`;

export const Button = styled.button`
  font-weight: 700;

  display: flex;
  align-items: center;
  gap: 14px;

  padding: 0.563em 1em;
  background-color: #000000;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(250, 187, 24, 0.1);
  border-radius: 8px;

  cursor: pointer;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    color: #000000;
    background-color: rgba(250, 187, 24, 0.1);
    border: 1px solid #000000;

    > svg {
      fill: #000000;
    }
  }
`;
