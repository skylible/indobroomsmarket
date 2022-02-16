export const heroes: Hero[] = [
  {
    id:1,
    title: 'Lidi nipah dan lidi sawit dari Indonesia',
    subtitle: 'Salah satu eksportir terbesar',
    image_url: '/lidi3.jpeg',
    button_text: 'See Our Product',
    button_url: '/product',
    sequence: 0,
  }
]


export interface Hero {
  id: number;
  title: string;
  subtitle: string;
  image_url: string;
  button_text: string;
  button_url: string;
  sequence: number;
}