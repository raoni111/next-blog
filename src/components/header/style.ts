import styled from 'styled-components';
import theme from '../../styles/theme';

export const Conteiner = styled.header`
  display: flex;
  justify-content: center;
  background-color: ${theme.colors.primaryy};
  a {
    margin: ${theme.spacings.small};
    color: ${theme.colors.white};
    text-decoration: none;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: ${theme.font.sizes.large};
    transition: opacity 300ms ease-in-out;
    &:hover {
      opacity: 0.5;
    }
  }
`;
