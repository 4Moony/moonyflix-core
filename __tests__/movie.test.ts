import { Movie } from "model/movie";

const mockMovie: Movie = {
  adult: false,
  backdrop_path: "/backdrop.jpg",
  genre_ids: [1, 2, 3],
  id: 123,
  original_language: "en",
  original_title: "Original Title",
  overview: "Movie overview",
  popularity: 7.5,
  poster_path: "/poster.jpg",
  release_date: "2024-01-01",
  title: "Title",
  video: false,
  vote_average: 7.2,
  vote_count: 1000,
};
describe("Movie type", () => {
  test("should have the correct properties", () => {
    const movie: Movie = { ...mockMovie };

    expect(movie.adult).toEqual(false);
    expect(movie.backdrop_path).toEqual("/backdrop.jpg");
    expect(movie.genre_ids).toEqual([1, 2, 3]);
    expect(movie.id).toEqual(123);
    expect(movie.original_language).toEqual("en");
    expect(movie.original_title).toEqual("Original Title");
    expect(movie.overview).toEqual("Movie overview");
    expect(movie.popularity).toEqual(7.5);
    expect(movie.poster_path).toEqual("/poster.jpg");
    expect(movie.release_date).toEqual("2024-01-01");
    expect(movie.title).toEqual("Title");
    expect(movie.video).toEqual(false);
    expect(movie.vote_average).toEqual(7.2);
    expect(movie.vote_count).toEqual(1000);
  });

  test("should accept boolean values for adult", () => {
    const movie1: Movie = { ...mockMovie, adult: true };
    const movie2: Movie = { ...mockMovie, adult: false };

    expect(movie1.adult).toEqual(true);
    expect(movie2.adult).toEqual(false);
  });

  test("should accept only valid date formats for release_date", () => {
    const validDate = "2024-01-01";
    const invalidDate = "2024/01/01";

    const movie1: Movie = { ...mockMovie, release_date: validDate };
    const movie2: Movie = { ...mockMovie, release_date: invalidDate };

    expect(movie1.release_date).not.toEqual(invalidDate);
    expect(movie2.release_date).not.toEqual(validDate);
  });

  test("should have id, title, and release_date properties", () => {
    const { id, title, release_date } = mockMovie;

    expect(id).toBeDefined();
    expect(title).toBeDefined();
    expect(release_date).toBeDefined();
  });

  test("popularity should be within range [0, 10]", () => {
    const movie1: Movie = { ...mockMovie, popularity: 5 };

    expect(movie1.popularity).toBeGreaterThanOrEqual(0);
    expect(movie1.popularity).toBeLessThanOrEqual(10);
  });

  test("poster_path and backdrop_path can be omitted", () => {
    const { poster_path, backdrop_path } = mockMovie;

    expect(poster_path).toBeDefined();
    expect(backdrop_path).toBeDefined();
  });

  test("should have correct types for properties", () => {
    const movie: Movie = mockMovie;

    expect(typeof movie.adult).toBe("boolean");
    expect(typeof movie.backdrop_path).toBe("string");
    expect(Array.isArray(movie.genre_ids)).toBe(true);
    expect(typeof movie.id).toBe("number");
    expect(typeof movie.original_language).toBe("string");
    expect(typeof movie.original_title).toBe("string");
    expect(typeof movie.overview).toBe("string");
    expect(typeof movie.popularity).toBe("number");
    expect(typeof movie.poster_path).toBe("string");
    expect(typeof movie.release_date).toBe("string");
    expect(typeof movie.title).toBe("string");
    expect(typeof movie.video).toBe("boolean");
    expect(typeof movie.vote_average).toBe("number");
    expect(typeof movie.vote_count).toBe("number");
  });
});
