export interface Movie {
  _id: string;
  plot: string;
  genres: string[];
  runtime: number;
  fullplot: string;
  cast: string[];
  num_mflix_comments: number;
  poster: string;
  title: string;
  lastupdated: string;
  languages: string[];
  released: string;
  directors: string[];
  writers: string[];
  awards: Awards;
  year: number;
  imdb: Imdb;
  countries: string[];
  type: string;
  tomatoes: Tomatoes;
}

export interface MovieDetail extends Movie {
  similarMovies: Movie[];
}

interface Tomatoes {
  viewer: Viewer;
  dvd: Dvd;
  website: string;
  production: string;
  lastUpdated: Dvd;
}

interface Dvd {
  $date: string;
}

interface Viewer {
  rating: number;
  numReviews: number;
  meter: number;
}

interface Imdb {
  rating: number;
  votes: number;
  id: number;
}

interface Awards {
  wins: number;
  nominations: number;
  text: string;
}

