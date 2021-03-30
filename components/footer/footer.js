import * as styles from './footer.module.scss';
import Icon from '../icon/icon';

export default function Footer({ config }) {
	return (
		<div className={styles.footer}>
			<div className={styles.icons}>
				{Object.keys(config.socialLinks).map((social) => (
					<Icon key={social} name={social} link={config.socialLinks[social]} />
				))}
			</div>
		</div>
	);
}
