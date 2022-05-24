import styled from 'styled-components';
import theme from '../../styles/theme';

const Conteiner = styled.div`
  color: ${theme.colors.gray};
  font-size: ${theme.font.sizes.small};
  margin: ${theme.spacings.medium};
  font-style: italic;
  a {
    text-decoration: none;
    margin-left: 0.5rem;
  }
`;

export default Conteiner;
