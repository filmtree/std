import React from 'react';
import ModalLayout from './components/ModalFadeTabLayout';
import useModal from '../../lib/UseModal';

const Modal = () => {
  const { isOpen, openModal, closeModal } = useModal();
  return (
    <div>
      <button onClick={openModal}>Modal Open Fade 접근성</button>
      <ModalLayout isOpen={isOpen} closeModal={closeModal}>
        <h2>Modal Title</h2>
        <p>This is the content of the modal.</p>        
      </ModalLayout>
    </div>
  );
};

export default Modal;