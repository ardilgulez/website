import Head from 'next/head';
import Link from 'next/link';
import { Layout } from '../components';
import * as styles from './404.module.scss';

export default function Custom404({ config }) {
	return (
		<Layout config={config}>
			<Head>
				<title>Oh Snap! | {config.name}</title>
			</Head>
			<h1 className={styles.header}>Sorry to bump into you this way.</h1>
			<h3 className={styles.subheader}>
				Let's get to know each other. My name is{' '}
				<Link href="/">
					<a className={styles.link}>Kemal</a>
				</Link>.
			</h3>
			<h3 className={styles.subheader}>Just click on my name to get to know me!</h3>
		</Layout>
	);
}
