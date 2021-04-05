import Link from 'next/link';

import { Layout, Date } from '../components/index';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
	const allPostsData = getSortedPostsData();
	return {
		props: {
			allPostsData
		}
	};
}

export default function Blog({ config, allPostsData }) {
	return (
		<Layout activeTab={'blog'} config={config}>
			{/* Add this <section> tag below the existing <section> tag */}
			<section>
				<h2>Blog</h2>
				<ul>
					{allPostsData.map(({ id, date, title }) => (
						<li key={id}>
							<Link href={`/posts/${id}`}>
								<a>{title}</a>
							</Link>
							<br />
							<small>
								<Date dateString={date} />
							</small>
						</li>
					))}
				</ul>
			</section>
		</Layout>
	);
}
