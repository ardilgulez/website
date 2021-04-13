import { Layout, Date } from '../../components/index';
import { getAllPostIds, getPostData } from '../../lib/posts';
import * as style from './[id].module.scss';
import Head from 'next/head';
import Image from 'next/image';

const Post = ({ config, postData }) => (
	<Layout config={config} activeTab={'blog'}>
		<Head>
			<title>{postData.title}</title>
		</Head>
		<article>
			<h1>{postData.title}</h1>
			<Image className={style.heroImage} width={800} height={500} src={postData.heroimage} />
			<small className={style.smallDate}>
				<Date dateString={postData.date} />
			</small>
			<div className={style.blogBody} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
		</article>
	</Layout>
);

const getStaticPaths = async () => {
	const paths = getAllPostIds();
	return {
		paths,
		fallback: false
	};
};

const getStaticProps = async ({ params }) => {
	const postData = await getPostData(params.id);
	return {
		props: {
			postData
		}
	};
};

export { getStaticPaths, getStaticProps };
export default Post;
