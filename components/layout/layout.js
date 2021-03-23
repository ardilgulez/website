import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.scss';
import Link from 'next/link';
import Icon from '../icon/icon';

const name = 'Kemal Ardıl Gülez';
export const siteTitle = `${name} | Personal Website`;

export default function Layout({ children }) {
	return (
		<div className={styles.sidebar}>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta name="description" content="Learn how to build a personal website using Next.js" />
				<meta name="og:title" content={siteTitle} />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
			<div className={styles.header}>
				<Image
					priority
					src="/images/profile.jpg"
					className={styles.borderCircle}
					height={144}
					width={144}
					alt={name}
				/>
				<h1 className={styles.headingName}>{name}</h1>
				<section className={styles.bioDescription}>
					<p>I help computers grant my wishes for the past 7+ years.</p>
				</section>
			</div>
			<div>
				<nav className="">
					<ul className={styles.navList}>
						<li className={styles.navListItem}>
							<Link href="/">
								<a className={styles.active}>Articles</a>
							</Link>
						</li>
						<li className={styles.navListItem}>
							<Link href="/pages/about">
								<a className={styles.navListLink}>About me</a>
							</Link>
						</li>
						<li className={styles.navListItem}>
							<Link href="/pages/contacts">
								<a className={styles.navListLink}>Contact me</a>
							</Link>
						</li>
					</ul>
				</nav>
			</div>
			<div className={styles.socialSection}>
				<Icon name="Twitter" />
				<Icon name="Linkedin" />
				<Icon name="Github" />
			</div>
			<div>
				<section className={styles.bioDescription}>
					<p>© All Rights Reserved</p>
				</section>
			</div>
			<main>{children}</main>
		</div>
	);
}
