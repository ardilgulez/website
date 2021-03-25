import Head from 'next/head';
import Image from 'next/image';
import styles from './sidebar.module.scss';
import Link from 'next/link';
import Icon from '../icon/icon';
import * as config from '../../config.json';

export default function Sidebar({ activeTab }) {
	return (
		<div className={styles.sidebar}>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta name="description" content="Learn how to build a personal website using Next.js" />
				<meta name="og:title" content={config.siteTitle} />
				<meta name="twitter:card" content="summary_large_image" />
				<title>{config.siteTitle}</title>
			</Head>
			<div className={styles.header}>
				<Image
					priority
					src="/images/profile.jpg"
					className={styles.borderCircle}
					height={144}
					width={144}
					alt={config.name}
				/>
				<h1 className={styles.headingName}>{config.name}</h1>
				<section className={styles.bioDescription}>
					<p>I help computers grant my wishes for the past 7+ years.</p>
				</section>
			</div>
			<div>
				<nav className="">
					<ul className={styles.navList}>
						<li key="about" className={styles.navListItem}>
							<Link href="/">
								<a className={activeTab === 'about' ? styles.active : styles.navListLink}>About me</a>
							</Link>
						</li>
						<li key="blog" className={styles.navListItem}>
							<Link href="/blog">
								<a className={activeTab === 'blog' ? styles.active : styles.navListLink}>Blog</a>
							</Link>
						</li>
						<li key="contacts" className={styles.navListItem}>
							<Link href="/contacts">
								<a className={activeTab === 'contacts' ? styles.active : styles.navListLink}>
									Contact me
								</a>
							</Link>
						</li>
					</ul>
				</nav>
			</div>
			<div className={styles.socialSection}>
				{Object.keys(config.socialLinks).map((social) => (
					<Icon name={social} link={config.socialLinks[social]} />
				))}
			</div>
			<div>
				<section className={styles.bioDescription}>
					<p>© All Rights Reserved</p>
				</section>
			</div>
		</div>
	);
}
