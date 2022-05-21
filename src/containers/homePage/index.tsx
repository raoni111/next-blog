import Head from 'next/head';
import Footer from '../../components/footer';
import Header from '../../components/header';
import MainContent from '../../components/mainContent';
import PostCard from '../../components/postCard';
import { SITE_NAME } from '../../config/config';
import { PostProtocol } from '../../domain/post/post';
import { Conteiner } from './style';

export type HomeProps = {
  posts: PostProtocol[];
};

export default function HomePage({ posts }: HomeProps): JSX.Element {
  return (
    <>
      <Head>
        <title>{SITE_NAME}</title>
        <meta name="description" content="blog de informações gerais raoni" />
      </Head>
      <Header />
      <MainContent>
        <Conteiner>
          {posts.map((post) => {
            return (
              <PostCard
                key={post.attributes.slug}
                cover={
                  post.attributes.cover.data[0].attributes.formats.thumbnail.url
                }
                title={post.attributes.title}
                slug={post.attributes.slug}
              />
            );
          })}
        </Conteiner>
      </MainContent>
      <Footer />
    </>
  );
}
