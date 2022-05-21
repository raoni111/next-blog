import { PostProtocol } from '../../domain/post/post';
import removeHtml from '../../utils/removeHtml';
import Header from '../../components/header';
import MainContent from '../../components/mainContent';
import Conteiner from './style';
import Footer from '../../components/footer';
import Heading from '../../components/heading';
import PostCover from '../../components/PostCover';
import PostDetails from '../../components/postDetails';
import PostContent from '../../components/postContent';
import Comments from '../../components/comments';
import Head from 'next/head';
import { SITE_NAME } from '../../config/config';

export interface PostProps {
  post: PostProtocol;
  content: string;
}

export default function Post({ post, content }: PostProps): JSX.Element {
  return (
    <Conteiner>
      <Head>
        <title>
          {post.attributes.title} - {SITE_NAME}
        </title>
        <meta name="description" content={removeHtml(content)} />
      </Head>
      <Header />
      <MainContent>
        <Heading>{post.attributes.title}</Heading>
        <PostCover
          coverUrl={
            !post.attributes.cover.data[0].attributes.formats.small.url
              ? post.attributes.cover.data[0].attributes.formats.thumbnail.url
              : post.attributes.cover.data[0].attributes.formats.small.url
          }
          alt={post.attributes.title}
        />
        <PostDetails
          date={post.attributes.createdAt}
          author={post.attributes.author.data.attributes.name}
          category={post.attributes.category.data.attributes.name}
        />
        <PostContent content={content} />
        <Comments slug={post.attributes.slug} title={post.attributes.title} />
      </MainContent>
      <Footer />
    </Conteiner>
  );
}
