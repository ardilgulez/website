import { Sidebar } from '../components/index';

import * as styles from './contacts.module.scss';

export default function Contacts() {
	const sendContact = async (event) => {
		event.preventDefault();

		const res = await fetch('/api/contacts', {
			body: JSON.stringify({
				firstName: event.target.firstName.value,
				lastName: event.target.lastName.value,
				email: event.target.email.value,
				message: event.target.message.value
			}),
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'POST'
		});

		const result = await res.json();
		// result.user => 'Ada Lovelace'
		console.log(result);
	};

	return (
		<div className={styles.outerContainer}>
			<Sidebar activeTab="contacts" />
			<div className={styles.pageSection}>
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
							placeholder="Comments (min 50 characters)"
							id="message"
							name="message"
							rows="2"
							cols="10"
							autoComplete="off"
							required={true}
							minLength={50}
						/>
					</div>
					<div className={styles.formField}>
						<button className={styles.submitButton} type="submit" id="formSubmit">
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
