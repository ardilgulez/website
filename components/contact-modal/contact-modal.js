import * as styles from './contact-modal.module.scss';
import React from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';

export default function ContactModal({ modalOpen, setModalOpen }) {
	return (
		<Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
			<div className="modal-header">
				<h5 className="modal-title" id="exampleModalLabel">
					Contact Form Successfully Submitted
				</h5>
				<button aria-label="Close" className="close" type="button" onClick={() => setModalOpen(!modalOpen)}>
					<span aria-hidden={true}>×</span>
				</button>
			</div>
			<ModalBody>I got your message and I'll get in touch with you ASAP!</ModalBody>
			<ModalFooter>
				<Button color="secondary" type="button" onClick={() => setModalOpen(!modalOpen)}>
					Close
				</Button>
			</ModalFooter>
		</Modal>
	);
}
