import Conteiner from './style';

export interface PostCoverProps {
  coverUrl: string;
  alt: string;
}

export default function PostCover({
  coverUrl,
  alt,
}: PostCoverProps): JSX.Element {
  return <Conteiner src={coverUrl} alt={alt} />;
}
