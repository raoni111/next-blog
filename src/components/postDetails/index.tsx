import Conteiner from './style';
import Date from '../date';

export interface PostDetailsProps {
  date: string;
  author: string;
  category: string;
}

export default function PostDetails({
  date,
  author,
  category,
}: PostDetailsProps): JSX.Element {
  return (
    <Conteiner>
      publicado em <Date date={date} /> por {author} em {category}
    </Conteiner>
  );
}
