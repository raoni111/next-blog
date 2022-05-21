import { DiscussionEmbed } from 'disqus-react';
import { SITE_URL } from '../../config/config';
import Conteiner from './style';
interface CommentsProps {
  slug: string;
  title: string;
}

export default function Comments({ slug, title }: CommentsProps): JSX.Element {
  return (
    <Conteiner>
      <DiscussionEmbed
        shortname="myblog-erukq8uock"
        config={{
          url: `${SITE_URL}/post/${slug}`,
          identifier: slug,
          title: title,
          language: 'pt_BR',
        }}
      />
    </Conteiner>
  );
}
