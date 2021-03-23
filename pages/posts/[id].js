import { Layout, Date } from '../../components/index';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';

const Post = ({ postData }) => (
	<div />
	// <Layout>
	// 	<Head>
	// 		<title>{postData.title}</title>
	// 	</Head>
	// 	<article>
	// 		<h1>{postData.title}</h1>
	// 		<div>
	// 			<Date dateString={postData.date} />
	// 		</div>
	// 		<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
	// 	</article>
	// </Layout>
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
