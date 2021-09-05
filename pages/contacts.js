import { Layout, ContactModal } from '../components/index';
import React, { useState } from 'react';

import * as styles from './contacts.module.scss';

export default function Contacts({ config }) {
	const [ modalOpen, setModalOpen ] = useState(false);
	const sendContact = async (event) => {
		event.preventDefault();
		const { firstName, lastName, email, message } = event.target;

		const res = await fetch('/api/contacts', {
			body: JSON.stringify({
				senderFirstName: firstName.value,
				senderLastName: lastName.value,
				senderEmail: email.value,
				message: message.value
			}),
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'POST'
		});

		const result = await res.json();
		setModalOpen(!modalOpen);
	};

	return (
		<Layout activeTab={'contacts'} config={config}>
			<ContactModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
			<section title="contact-form">
				<h1>Say What's Up!</h1>
				<form className={styles.contactForm} onSubmit={sendContact} autoComplete="on">
					<div className={styles.formField}>
						<input
							placeholder="First Name (min 3 characters)"
							className={[ styles.formInput, styles.formTextField ].join(' ')}
							type="text"
							id="firstName"
							name="firstName"
							autoComplete="on"
							required={true}
							minLength={3}
						/>
					</div>
					<div className={styles.formField}>
						<input
							placeholder="Last Name (min 3 characters)"
							className={[ styles.formInput, styles.formTextField ].join(' ')}
							type="text"
							id="lastName"
							name="lastName"
							autoComplete="on"
							required={true}
							minLength={3}
						/>
					</div>
					<div className={styles.formField}>
						<input
							placeholder="Email (mandatory)"
							className={[ styles.formInput, styles.formTextField ].join(' ')}
							type="email"
							id="email"
							name="email"
							required={true}
						/>
					</div>
					<div className={styles.formField}>
						<textarea
							className={[ styles.formInput, styles.formTextArea ].join(' ')}
							placeholder="Comments (min 10 characters)"
							id="message"
							name="message"
							rows="2"
							cols="10"
							autoComplete="off"
							required={true}
							minLength={10}
						/>
					</div>
					<div className={styles.formButton}>
						<button className={styles.submitButton} type="submit" id="formSubmit">
							Submit
						</button>
					</div>
				</form>
			</section>
		</Layout>
	);
}
