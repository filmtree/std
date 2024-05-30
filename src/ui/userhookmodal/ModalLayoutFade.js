import React, { useEffect, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import useOutsideClick from './UseOutsideClick';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  animation: ${({ isOpen }) => (isOpen ? css`${fadeIn} 0.3s forwards` : css`${fadeOut} 0.3s forwards`)};
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

const CloseButton = styled.button`
  font-size: 16px;
  border: none;
  cursor: pointer;
`;

const ModalLayout = ({ isOpen, closeModal, children }) => {
  const modalRef = useOutsideClick(closeModal);
  const [visible, setVisible] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
    } else {
      const timer = setTimeout(() => setVisible(false), 300); // 300ms 후에 visible을 false로 설정해서 Dom 삭제
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!visible) return null;

  return (
    <ModalContainer isOpen={isOpen}>
      <ModalContent ref={modalRef}>
        {children}
        <CloseButton onClick={closeModal}>닫기</CloseButton>
      </ModalContent>
    </ModalContainer>
  );
};

export default ModalLayout;