import Link from 'next/link';
import { Conteiner } from './style';

export default function Footer(): JSX.Element {
  return (
    <Conteiner>
      <Link href="/">
        <a>feito por Raoni Olivera Quevedo</a>
      </Link>
    </Conteiner>
  );
}
