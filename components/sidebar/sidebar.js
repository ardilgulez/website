import Image from 'next/image';
import styles from './sidebar.module.scss';
import Link from 'next/link';
import Icon from '../icon/icon';
import * as config from '../../config.json';

export default function Sidebar({ activeTab }) {
	return (
		<div className={styles.sidebar}>
			<div className={styles.header}>
				<Link href="/">
					<Image
						priority
						layout="responsive"
						src="/images/profile.jpg"
						className={[ styles.borderCircle, styles.homeLink ].join(' ')}
						height={144}
						width={144}
						alt={config.name}
					/>
				</Link>
				<Link href="/">
					<h1 className={[ styles.headingName, styles.homeLink ].join(' ')}>{config.name}</h1>
				</Link>
				<section className={styles.bioDescription}>
					<p>{config.bio}</p>
				</section>
			</div>
			<div>
				<nav className="">
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
				</nav>
			</div>
			<div className={styles.socialSection}>
				{Object.keys(config.socialLinks).map((social) => (
					<Icon key={social} name={social} link={config.socialLinks[social]} />
				))}
			</div>
			<div>
				<section className={styles.bioDescription}>
					<p>{config.credits}</p>
				</section>
			</div>
		</div>
	);
}
