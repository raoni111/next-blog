import Conteiner from './style';
export interface HeadingProps {
  children: React.ReactNode;
}

export default function Heading({ children }: HeadingProps): JSX.Element {
  return <Conteiner>{children}</Conteiner>;
}
