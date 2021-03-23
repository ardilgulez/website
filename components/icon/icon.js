import styles from './icon.module.scss';

import Icons from './icons';

const getIconWithName = (name) => {
	return Icons[name.toUpperCase()];
};

const Icon = ({ name }) => {
	const icon = getIconWithName(name);
	return (
		<a className={styles.socialButton}>
			<svg className={styles['icon']} viewBox={icon.viewBox}>
				<title>{name}</title>
				<path d={icon.path} />
			</svg>
		</a>
	);
};

export default Icon;
