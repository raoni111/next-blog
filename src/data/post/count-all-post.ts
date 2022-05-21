import getPost from './get-all-post';

export default async function countAllPost(): Promise<number> {
  let posts;
  await getPost('sort[0]=id:desc&pagination[pageSize]=30').then((r) => {
    posts = r.meta;
  });
  const postSize = posts.pagination.total as number;
  return postSize;
}
