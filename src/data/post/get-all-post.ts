import axios from 'axios';
import { POST_URL } from '../../config/config';

export default async function getAllPost(query = ''): Promise<any> {
  const url = `${POST_URL}&${query}`;
  let posts;
  await axios.get(url).then((response) => {
    posts = response.data;
  });
  return posts;
}
