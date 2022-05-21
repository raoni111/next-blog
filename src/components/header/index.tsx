import Link from 'next/link';
import { SITE_NAME } from '../../config/config';
import { Conteiner } from './style';

export default function Header(): JSX.Element {
  return (
    <Conteiner>
      <Link href="/">
        <a>{SITE_NAME}</a>
      </Link>
    </Conteiner>
  );
}
