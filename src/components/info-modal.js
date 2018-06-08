import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-responsive-modal';
import './info-modal.css'

class InfoModal extends React.Component {
  state = {
    open: false,
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <div>
        <button className='modal-btn' onClick={this.onOpenModal}>How I work</button>
        <Modal
          open={open}
          onClose={this.onCloseModal}
          center
          classNames={{ 
            overlay: 'info-overlay', 
            modal: 'info-modal', 
            closeButton: 'info-btn'
           }}

        >
          <h2 className='infomodal-title'>Welcome to Tankler</h2>
          <p>A personal bulter for your fishtank.</p>
          <p>
            Tankler was created to help people manage their aquariums by letting
            users create and manage tasks, keep track of tank parameters, and manage
            the livestock in their tanks.
          </p>
          <p>
            For an in-depth guide on how to use the app go to the info tab once registered
            and logged in.
          </p>
        </Modal>
      </div>
    );
  }
}

export default connect()(InfoModal);