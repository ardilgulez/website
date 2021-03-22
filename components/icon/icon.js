import styles from './icon.module.scss';

const Icon = ({ name, icon }) => (
	<svg className={styles['icon']} viewBox={icon.viewBox}>
		<title>{name}</title>
		<path d={icon.path} />
	</svg>
);

export default Icon;
