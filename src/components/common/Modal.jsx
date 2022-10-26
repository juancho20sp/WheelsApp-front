import React from 'react';

import Modal from 'react-modal';

const CustomModal = ({ isOpen = false, onRequestClose = '', contentLabel = '', children }) => {
    Modal.setAppElement('#root');
    
    return (
        <Modal
            isOpen={isOpen}
            // onAfterOpen={onAfterOpen}
            onRequestClose={onRequestClose}
            contentLabel={contentLabel}>
            {children}
        </Modal>
    );
};

export default CustomModal;