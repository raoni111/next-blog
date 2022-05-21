import Footer from '../../components/footer';
import Header from '../../components/header';
import MainContent from '../../components/mainContent';
import PostCard from '../../components/postCard';
import { PostProtocol } from '../../domain/post/post';
import { Conteiner } from './style';

export type HomeProps = {
  posts: PostProtocol[];
};

export default function HomePage({ posts }: HomeProps): JSX.Element {
  return (
    <>
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
