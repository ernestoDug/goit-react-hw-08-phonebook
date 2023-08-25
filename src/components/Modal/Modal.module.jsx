import styled from '@emotion/styled';

export const OverlayStyle = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: radial-gradient(
    circle,
    rgba(60, 119, 204, 0.8) 27%,
    rgba(160, 211, 241, 0.8) 64%,
    rgba(68, 159, 214, 0.8) 100%
  );
  z-index: 666;
`;

export const ContentStyle = styled.div`
  border-radius: 20px/60px;
  overflow: hidden;
  padding-left: 30px;
  padding-right: 30px;
   z-index: 666;
`;
