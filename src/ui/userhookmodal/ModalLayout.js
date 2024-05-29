import React from 'react';
import styled from 'styled-components';
import useOutsideClick from './UseOutsideClick';

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

  return isOpen ? (
    <ModalContainer>
      <ModalContent ref={modalRef}>
        {children}
        <CloseButton onClick={closeModal}>닫기</CloseButton>
      </ModalContent>
    </ModalContainer>
  ) : null;
};

export default ModalLayout;
