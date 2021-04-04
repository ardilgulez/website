import * as styles from './header.module.scss';
import Link from 'next/link';

export default function Header({ activeTab, config }) {
	return (
		<header role="banner" className={styles.header}>
			<div className={styles.navContainer}>
				<div className={styles.welcome}>
					<ul className={styles.navList}>
						<li className={styles.navListItem}>
							<Link href="/">
								<a className={styles.welcomeText}>{config.name}</a>
							</Link>
						</li>
					</ul>
				</div>
				<div className={styles.nav}>
					<ul className={styles.navList}>
						<li key="about" className={styles.navListItem}>
							<Link href="/">
								<a className={activeTab === 'about' ? styles.active : styles.navListLink}>Me</a>
							</Link>
						</li>
						<li key="blog" className={styles.navListItem}>
							<Link href="/blog">
								<a className={activeTab === 'blog' ? styles.active : styles.navListLink}>Blog</a>
							</Link>
						</li>
						<li key="contacts" className={styles.navListItem}>
							<Link href="/contacts">
								<a className={activeTab === 'contacts' ? styles.active : styles.navListLink}>Hello</a>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
}
