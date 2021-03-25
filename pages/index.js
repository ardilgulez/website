import { Sidebar } from '../components/index';
import * as styles from './index.module.scss';

export default function About({ config }) {
	return (
		<div className={styles.outerContainer}>
			<Sidebar activeTab="about" />
			<div className={styles.pageSection}>
				<section title="about">
					<h1 className={styles.aboutTitle}>How about me?</h1>
					<p>
						I'm a full stack developer for the past 7+ years (since 2013, to be exact), now working at Hexad
						GmbH.
					</p>
					<p>Currently Learning: Android App Development (Native)</p>
					<h1 className={styles.aboutTitle} style={{ marginBottom: '2rem' }}>
						My Employment History
					</h1>
					{config.employmentHistory.map((item) => (
						<div className={styles.employment}>
							<div className={styles.employmentTitle}>
								<h2 className={styles.titleText}>{item.name}</h2>
								<span className={styles.dateSpan}>{item.dates}</span>
							</div>
							<div className={styles.employmentDetails}>
								{item.titles.map((titleItem) => (
									<div className={styles.employmentSubtitle}>
										<h4 className={styles.titleText}>{titleItem.title}</h4>
										{item.titles.length > 1 && (
											<span className={styles.dateSpan}>{titleItem.date}</span>
										)}
									</div>
								))}
								<p className={styles.jobDetails}>{item.description}</p>
								<ul className={[ styles.responsibilityList, styles.jobDetails ].join(' ')}>
									{item.responsibilities.map((responsibility) => <li>{responsibility}</li>)}
								</ul>
							</div>
						</div>
					))}
				</section>
			</div>
		</div>
	);
}
