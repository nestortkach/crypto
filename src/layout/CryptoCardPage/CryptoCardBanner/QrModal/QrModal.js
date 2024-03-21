import React, { useState } from 'react';
import css from './qrModal.module.scss';
import Modal from 'react-modal';

export default function QrModal({ visible, setVisible }) {
  const [toggle, setToggle] = useState('Google Play');

  const handleQr = (e) => {
    setToggle(e.target.textContent);
  };
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      background: '#FFFFFF',
      boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.25)',
      borderRadius: '12px',
      padding: '0 20px 20px 20px',
    },
  };

  return (
    <div className={css.container}>
      <Modal isOpen={visible} style={customStyles} contentLabel='Example Modal'>
        <div className={css.modalHeader}>
          <img className={css.closeBtn} src='close-btn.svg' onClick={() => setVisible(false)} />
          <h2>Get Guardarian App</h2>
          <p>Scan the code below to download</p>
        </div>
        <div className={css.toggleBtn}>
          <button className={toggle === 'Google Play' ? css.activeBtn : null} onClick={handleQr}>
            Google Play
          </button>
          <button className={toggle === 'App Store' ? css.activeBtn : null} onClick={handleQr}>
            App Store
          </button>
        </div>
        <div className={css.imgContainer}>
          {toggle === 'Google Play' ? <img src='qrCode-apple.svg' /> : <img src='qrCode-google.svg' />}
        </div>
      </Modal>
    </div>
  );
}
