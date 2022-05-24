import { GetServerSideProps } from 'next';
import HomePage from '../../containers/homePage';
import getAllPost from '../../data/post/get-all-post';
import { PostProtocol } from '../../domain/post/post';

export type CategoryProps = {
  posts: PostProtocol[];
  category: string;
};

export default function Category({
  posts,
  category,
}: CategoryProps): JSX.Element {
  return (
    <>
      <HomePage posts={posts} category={category} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  let posts;
  await getAllPost(
    `sort[0]=id:desc&pagination[pageSize]=30&filters[category][name][$eq]=${ctx.query.category}`,
  ).then((r) => {
    posts = r.data as PostProtocol[];
  });
  return {
    props: {
      posts,
      category: ctx.query.category,
    },
  };
};
