import * as styles from './index.module.scss';
import { Layout } from '../components/index';

export default function About({ config }) {
	return (
		<Layout config={config} activeTab={'about'}>
			<section title="about">
				<h1 className={styles.aboutTitle}>How about me?</h1>
				<p>{config.description}</p>
				<p>{config.nowLearning}</p>
				<h1 className={styles.aboutTitle} style={{ marginBottom: '2rem' }}>
					My Employment History
				</h1>
			</section>
			<section title="employment-history">
				{config.employmentHistory.map((item) => (
					<div key={item.name} className={styles.employment}>
						<div className={styles.employmentTitle}>
							<h2 className={styles.titleText}>{item.name}</h2>
							<span className={styles.dateSpan}>{item.dates}</span>
						</div>
						<div className={styles.employmentDetails}>
							{item.titles.map((titleItem) => (
								<div key={titleItem.title} className={styles.employmentSubtitle}>
									<h4 className={styles.titleText}>{titleItem.title}</h4>
									{item.titles.length > 1 && (
										<span className={styles.dateSpan}>{titleItem.date}</span>
									)}
								</div>
							))}
							<p className={styles.jobDetails}>{item.description}</p>
							<ul className={[ styles.responsibilityList, styles.jobDetails ].join(' ')}>
								{item.responsibilities.map((responsibility) => (
									<li key={responsibility}>{responsibility}</li>
								))}
							</ul>
							<div className={styles.techTagContainer}>
								{item.technologies.map((technology) => (
									<span key={technology} className={styles.techTag}>
										{technology}
									</span>
								))}
							</div>
						</div>
					</div>
				))}
			</section>
		</Layout>
	);
}
