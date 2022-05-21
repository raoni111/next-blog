import { GetStaticPaths, GetStaticProps } from 'next';
import Post from '../../containers/post';
import countAllPost from '../../data/post/count-all-post';
import getAllPost from '../../data/post/get-all-post';
import getPost from '../../data/post/get-post';
import { PostProtocol } from '../../domain/post/post';

export interface DynamicPostProps {
  _post: {
    data: PostProtocol[];
    content: string;
  };
}

export default function DynamicPost({ _post }: DynamicPostProps): JSX.Element {
  const post = _post.data[0];
  const postContent = _post.content;
  return <Post post={post} content={postContent} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  let postSize;
  let posts: PostProtocol[];
  await countAllPost().then((r) => {
    postSize = r;
  });
  await getAllPost('pagination[limit]=' + postSize).then((r) => {
    posts = r.data;
  });
  return {
    paths: posts.map((post) => {
      return {
        params: { slug: post.attributes.slug },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  let posts;
  await getPost(ctx.params.slug).then((r) => {
    posts = r;
  });
  return {
    props: {
      _post: posts,
    },
  };
};
