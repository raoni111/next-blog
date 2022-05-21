import Conteiner from './style';

export interface PostContentProps {
  content: string;
}

export default function PostContent({
  content,
}: PostContentProps): JSX.Element {
  return <Conteiner dangerouslySetInnerHTML={{ __html: content }} />;
}
