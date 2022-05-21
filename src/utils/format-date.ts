export default function formatDate(date: string): string {
  const dateObject = new Date(date);
  return dateObject.toLocaleDateString('pt-BR');
}
