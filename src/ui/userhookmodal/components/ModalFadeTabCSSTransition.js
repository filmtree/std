import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import useOutsideClick from '../../../lib/UseOutsideClick';
import './Animation.css';

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
  div {
    &:focus {
      outline: 2px solid #333333;
    }
  }
`;

const CloseButton = styled.button`
  font-size: 16px;
  border: none;
  cursor: pointer;
  &:focus {
    outline: 2px solid #333333;
  }
`;

const ModalLayout = ({ isOpen, closeModal, children }) => {
  const modalRef = useOutsideClick(closeModal);
  const contentRef = useRef(null); // ModalContent 대신 내부 div에 대한 ref

  useEffect(() => {
    if (isOpen && contentRef.current) {
      // 내부 div에 포커스 설정
      contentRef.current.setAttribute('tabIndex', -1); // 포커스 가능하도록 설정
      contentRef.current.focus();

      const focusableElements =
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
      const focusableContent =
        modalRef.current.querySelectorAll(focusableElements);
      const firstFocusableElement =
        focusableContent.length === 1
          ? contentRef.current
          : focusableContent[0];
      // const firstFocusableElement = focusableContent[0];
      const lastFocusableElement =
        focusableContent[focusableContent.length - 1];

      const handleKeyDown = (event) => {
        if (event.key === 'Tab' || event.keyCode === 9) {
          if (event.shiftKey) {
            if (document.activeElement === firstFocusableElement) {
              lastFocusableElement.focus();
              event.preventDefault();
            }
          } else {
            if (document.activeElement === lastFocusableElement) {
              firstFocusableElement.focus();
              event.preventDefault();
            }
          }
        } 
        if (event.key === 'Escape') {
          closeModal();
        }
      };

      document.addEventListener('keydown', handleKeyDown);

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen, modalRef]); // 의존성 배열에서 contentRef를 제거하고 isOpen만 남김

  return (
    <CSSTransition in={isOpen} timeout={300} classNames='modal' unmountOnExit>
      <ModalContainer>
        <ModalContent ref={modalRef}>
          <div ref={contentRef}>
            {children}
            <CloseButton onClick={closeModal}>닫기</CloseButton>
          </div>
        </ModalContent>
      </ModalContainer>
    </CSSTransition>
  );
};

export default ModalLayout;
