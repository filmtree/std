import React from 'react';
import ModalLayout from './components/ModalFadeTabCSSTransition';
import useModal from '../../lib/UseModal';

const Modal = () => {
  const { isOpen, openModal, closeModal } = useModal();
  return (
    <div>
      <button onClick={openModal}>Modal Open Fade</button>
      <ModalLayout isOpen={isOpen} closeModal={closeModal}>
        <h2>Modal Title</h2>
        <p>CSSTransition Modal Fade</p>        
      </ModalLayout>
    </div>
  );
};

export default Modal;