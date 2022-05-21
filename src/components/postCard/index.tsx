import Link from 'next/link';
import { Conteiner, PostCardCover, PostCardHeading } from './style';

interface PostCardProtocol {
  slug: string;
  title: string;
  cover: string;
}

export default function PostCard({
  slug,
  title,
  cover,
}: PostCardProtocol): JSX.Element {
  return (
    <Conteiner>
      <PostCardCover>
        <Link href="/post/[slug]" as={`/post/${slug}`}>
          <a href="">
            <img src={cover} alt={title} />
          </a>
        </Link>
      </PostCardCover>
      <PostCardHeading>
        <Link href="/post/[slug]" as={`/post/${slug}`}>
          <a href="">{title}</a>
        </Link>
      </PostCardHeading>
    </Conteiner>
  );
}
