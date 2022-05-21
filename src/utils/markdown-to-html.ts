import showdown from 'showdown';

export default async function markdownToHtml(content: string): Promise<string> {
  const converter = new showdown.Converter();
  const data = converter.makeHtml(content);
  return String(data);
}
