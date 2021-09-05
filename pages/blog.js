import { Layout, PostCard } from '../components/index';
import { getSortedPostsData } from '../lib/posts';
import * as style from './blog.module.scss';

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
				<ul className={style.cardList}>
					{allPostsData.map((post) => <PostCard {...post} />)}
				</ul>
			</section>
		</Layout>
	);
}
