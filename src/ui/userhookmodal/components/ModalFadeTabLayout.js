import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import useOutsideClick from '../../../lib/UseOutsideClick';

// 페이드 인 애니메이션 정의
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// 페이드 아웃 애니메이션 정의
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
  animation: ${({ isTransition }) => isTransition ? css`${fadeIn} 0.3s ease-out forwards` : css`${fadeOut} 0.3s ease-in forwards`};
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
  const contentRef = useRef(null); 

  // 모달이 실제로 화면에 보여지는 상태 관리를 위한 상태 변수
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timeoutId;
    if (isOpen) {
      setIsVisible(true);
    } else if (!isOpen && isVisible) {
      // isOpen이 false로 바뀌었을 때, 페이드 아웃 애니메이션이 끝난 후 isVisible 상태를 false로 변경
      timeoutId = setTimeout(() => setIsVisible(false), 300); // 300ms는 페이드 아웃 애니메이션 시간과 동일하게 설정
    }

    return () => clearTimeout(timeoutId); // 컴포넌트가 언마운트 될 때 타이머를 제거
  }, [isOpen, isVisible]);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      
      contentRef.current.setAttribute('tabIndex', -1); 
      contentRef.current.focus();


      const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
      const focusableContent = modalRef.current.querySelectorAll(focusableElements);
      const firstFocusableElement = focusableContent.length === 1 ? contentRef.current : focusableContent[0];
      // const firstFocusableElement = focusableContent[0];
      const lastFocusableElement = focusableContent[focusableContent.length - 1];

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

  return isOpen ? (
    <ModalContainer isTransition={isOpen}>
      <ModalContent ref={modalRef}>
        <div ref={contentRef}> 
          {children}
        <CloseButton onClick={closeModal}>닫기</CloseButton>
        </div>
      </ModalContent>
    </ModalContainer>
  ) : null;
};

export default ModalLayout;
