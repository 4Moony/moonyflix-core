import { Movie } from 'model/movie'

export interface IMovieService {
  getMovies(): Promise<Movie[]>
}
