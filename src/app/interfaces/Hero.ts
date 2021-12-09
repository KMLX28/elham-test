export type Hero = {
  name: string;
  description: string;
  powers: string;
  rate: Rating;
}

export type Rating = 1 | 2 | 3 | 4 | 5;

export type SortTypes = 'NAME' | 'POWER';
