import Conteiner from './style';

interface MainProps {
  children: React.ReactNode;
}

export default function MainContent({ children }: MainProps): JSX.Element {
  return <Conteiner>{children}</Conteiner>;
}
