import { Sidebar, Footer, Header } from '../';
import * as styles from './layout.module.scss';

const PageLayout = ({ config, activeTab, children }) => (
	<div className={styles.outerContainer}>
		<Sidebar activeTab={activeTab} />
		<Header activeTab={activeTab} />
		<div className={styles.pageContainer}>{children}</div>
		<span>® by Kemal Ardil Gülez</span>
		<Footer config={config} />
	</div>
);
export default PageLayout;
