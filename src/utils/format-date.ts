export default function formatDate(date: string): string {
  console.log(date);
  const dateObject = new Date(date);
  return dateObject.toLocaleDateString('pt-BR');
}
