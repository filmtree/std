import React from 'react';
import ModalLayout from './components/ModalTabLayout';
import useModal from '../../lib/UseModal';

const Modal = () => {

  const modal1 = useModal();
  const modal2 = useModal();

  return (
    <div>

      <button onClick={modal1.openModal}>Modal Open 1 접근성</button>
      <button onClick={modal2.openModal}>Modal Open 2 접근성</button>

      <ModalLayout isOpen={modal1.isOpen} closeModal={modal1.closeModal}>
        <h2>Modal Title111</h2>
        <p>This is the content of the modal.111</p>        
      </ModalLayout>

      <ModalLayout isOpen={modal2.isOpen} closeModal={modal2.closeModal}>
        <h2>Modal Title222</h2>
        <p>This is the content of the modal.222</p>        
      </ModalLayout>
      
    </div>
  );
};

export default Modal;