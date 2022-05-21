import { GetStaticProps } from 'next';
import HomePage from '../containers/homePage';
import getAllPost from '../data/post/get-all-post';
import { PostProtocol } from '../domain/post/post';

export type HomeProps = {
  posts: PostProtocol[];
};

export default function Home({ posts }: HomeProps): JSX.Element {
  return (
    <>
      <HomePage posts={posts} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  let posts;
  await getAllPost('sort[0]=id:desc&pagination[pageSize]=30').then((r) => {
    posts = r.data as PostProtocol[];
  });
  return {
    props: {
      posts,
    },
  };
};
