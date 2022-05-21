import formatDate from '../../utils/format-date';
import Conteiner from './style';

export interface DateProps {
  date: string;
}

export default function Date({ date }: DateProps): JSX.Element {
  return <Conteiner>{formatDate(date)}</Conteiner>;
}
