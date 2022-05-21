import axios from 'axios';
import { POST_URL } from '../../config/config';
import { PostProtocol } from '../../domain/post/post';
import markdownToHtml from '../../utils/markdown-to-html';

export default async function getPost(slug: string | string[]): Promise<any> {
  const slugString = Array.isArray(slug) ? slug[0] : slug;
  const url = `${POST_URL}&filters[slug][$eq]=${slugString}`;
  let posts;
  await axios.get(url).then((response) => {
    posts = response.data;
  });
  const content = await markdownToHtml(posts.data[0].attributes.content);
  const finalContemt = { ...posts, content };
  return finalContemt;
}
