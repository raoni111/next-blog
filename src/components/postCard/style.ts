import styled from 'styled-components';
import theme from '../../styles/theme';

export const Conteiner = styled.div`
  transition: opacity 300ms ease-in-out;
  &:hover {
    opacity: 0.5;
  }
`;

export const PostCardCover = styled.div`
  margin-bottom: ${theme.spacings.small};
  img {
    display: block;
    width: 100%;
  }
`;

export const PostCardHeading = styled.h2`
  a {
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.darkGray};
    text-decoration: none;
  }
`;
