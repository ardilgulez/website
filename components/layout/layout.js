import Head from 'next/head';
import { Sidebar, Footer, Header } from '../';
import * as styles from './layout.module.scss';

const Layout = ({ config, activeTab, children }) => (
	<div className={styles.outerContainer}>
		<Head>
			<link rel="icon" href="/favicon.ico" />
			{/* Type & URL */}
			<meta property="og:type" content="website" />
			<meta property="og:url" content={config.url} />
			{/* Title */}
			<title>{config.siteTitle}</title>
			<meta property="og:title" content={config.siteTitle} />
			<meta name="twitter:title" content={config.siteTitle} />
			{/* Description */}
			<meta name="description" content={config.description} />
			<meta property="og:description" content={config.description} />
			<meta name="twitter:description" content={config.description} />
			{/* Image */}
			<meta name="image" content={config.image} />
			<meta property="og:image" content={config.image} />
			<meta name="twitter:image" content={config.image} />
			{/* Twitter */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:creator" content="@ardilgulez" />
			{/* Google Site Verification */}
			<meta name="google-site-verification" content={config.googleSiteVerification} />
		</Head>
		<Sidebar activeTab={activeTab} />
		<Header activeTab={activeTab} />
		<main className={styles.pageContainer}>{children}</main>
		{/* <span>® by Kemal Ardil Gülez</span> */}
		<Footer config={config} />
	</div>
);
export default Layout;
